"use client";

import useChatSession from "@/hooks/useChatSession";
import { CHAT_SESSIONS } from "@/lib/constants/tableNames";
import { AIType, Message, MessageWithButton } from "@/types/chat.session.type";
import { createClient } from "@/utils/supabase/client";
import { RealtimePostgresInsertPayload } from "@supabase/supabase-js";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useRef, useState, useEffect } from "react";
import FriendMessageItem from "./FriendMessageItem";
import ChatInput from "./ChatInput";
import { getDateDay } from "@/lib/utils/getDateDay";
import { queryKeys } from "@/lib/queryKeys";
import useChatSummary from "@/hooks/useChatSummary";
import ChatSkeleton from "./ChatSkeleton";

interface FriendChatProps {
  sessionId: string;
  aiType: AIType;
}

export type MutationContext = {
  previousMessages: MessageWithButton[] | undefined;
};

const FriendChat = ({ sessionId, aiType }: FriendChatProps) => {
  // const { isLoading: sessionIsLoading } = useChatSession("friend");
  const supabase = createClient();
  const textRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isNewConversation, setIsNewConversation] = useState(true);
  const [isDiaryMode, setIsDiaryMode] = useState(false);
  const [diaryContent, setDiaryContent] = useState("");
  const [showSaveDiaryButton, setShowSaveDiaryButton] = useState(false);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

  const {
    data: messages,
    isPending: isPendingMessages,
    isSuccess: isSuccessMessages,
    refetch: refetchMessages
  } = useQuery<MessageWithButton[]>({
    queryKey: [queryKeys.chat, aiType, sessionId],
    queryFn: async () => {
      if (!sessionId) return;
      const response = await fetch(`/api/chat/${aiType}/${sessionId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setIsNewConversation(false);
      return data.message || [];
    },
    enabled: !!sessionId,
    gcTime: 1000 * 60 * 30
  });

  const sendMessageMutation = useMutation<MessageWithButton[], Error, string, MutationContext>({
    mutationFn: async (newMessage: string) => {
      const response = await fetch(`/api/chat/${aiType}/${sessionId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: newMessage })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setIsNewConversation(true);
      return data.message;
    },
    onMutate: async (newMessage): Promise<MutationContext> => {
      await queryClient.cancelQueries({ queryKey: [queryKeys.chat, aiType, sessionId] });
      const previousMessages = queryClient.getQueryData<Message[]>([queryKeys.chat, aiType, sessionId]);

      const userMessage: MessageWithButton = {
        role: "user" as const,
        content: newMessage,
        created_at: new Date().toISOString()
      };

      queryClient.setQueryData<Message[]>([queryKeys.chat, aiType, sessionId], (oldData) => [
        ...(oldData || []),
        userMessage
      ]);

      return { previousMessages };
    },
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData<MessageWithButton[]>([queryKeys.chat, aiType, sessionId], (oldData = []) => {
        const withoutOptimisticUpdate = oldData.slice(0, -1);
        const newMessages = [...withoutOptimisticUpdate, ...data];

        if (isDiaryMode) {
          const lastAIMessage = data.find((msg) => msg.role === "friend");
          if (lastAIMessage) {
            if (lastAIMessage.content.includes("오늘 하루는 어땠어?")) {
              setShowSaveDiaryButton(false);
            } else if (lastAIMessage.content.includes("네가 얘기해준 내용을 바탕으로 일기를 작성해봤어")) {
              setDiaryContent(lastAIMessage.content);
              setShowSaveDiaryButton(true);
            }
          }
        }

        return newMessages;
      });
    },
    onError: (error, newMessage, context) => {
      console.error("Error sending message", error);
      if (context?.previousMessages) {
        queryClient.setQueryData([queryKeys.chat, aiType, sessionId], context?.previousMessages);
      }
    }
  });

  const saveDiaryMutation = useMutation({
    mutationFn: async (content: string) => {
      const response = await fetch(`/api/chat/${aiType}/${sessionId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: content, saveDiary: true })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save diary");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsDiaryMode(false);
      setDiaryContent("");
      setShowSaveDiaryButton(false);
    },
    onError: (error: Error) => {
      console.error("Error saving diary:", error.message);
    }
  });

  if (isSuccessMessages) {
    console.log("messages", messages);
  }

  const { triggerSummary } = useChatSummary(sessionId, messages, aiType);
  useEffect(() => {
    if (isSuccessMessages && messages.length > 0) {
      triggerSummary();
    }
  }, [messages, triggerSummary, isSuccessMessages]);

  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToBottom();
    }
  }, [messages, shouldScrollToBottom]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 30; // 30px 여유
      setShouldScrollToBottom(isAtBottom);
    }
  };

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    const channel = supabase
      .channel(`messages_${sessionId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: CHAT_SESSIONS,
          filter: `session_id=eq.${sessionId}`
        },
        (payload: RealtimePostgresInsertPayload<Message>) => {
          queryClient.setQueryData<Message[]>([queryKeys.chat, aiType, sessionId], (oldData = []) => {
            const newMessage = payload.new as Message;

            if (oldData.some((msg) => msg.created_at === newMessage.created_at)) return oldData;
            return [...oldData, newMessage];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, queryClient, aiType, sessionId]);

  const handleCreateDiaryList = async () => {
    setIsDiaryMode(true);
    setShowSaveDiaryButton(false);
    const btnMessage = "일기를 작성해줘";
    await sendMessageMutation.mutateAsync(btnMessage);
  };

  const handleSaveDiary = () => {
    if (diaryContent) {
      saveDiaryMutation.mutate(diaryContent);
    }
  };

  const handleSendMessage = async () => {
    if (!textRef.current || !textRef.current.value.trim() || sendMessageMutation.isPending) {
      return;
    }
    const newMessage = textRef.current.value;
    textRef.current.value = "";

    await sendMessageMutation.mutateAsync(newMessage);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="bg-faiTrans-20080 backdrop-blur-xl flex-grow rounded-t-3xl flex flex-col h-full">
        <div ref={chatContainerRef} onScroll={handleScroll} className="flex-grow overflow-y-auto pb-[250px] p-4">
          <div className="text-gray-600 text-center my-2 leading-6 text-sm font-normal">{getDateDay()}</div>
          {isPendingMessages ? <ChatSkeleton /> : null}
          {isSuccessMessages && messages && messages.length > 0 && (
            <ul>
              {messages?.map((message, index) => (
                <FriendMessageItem
                  key={index}
                  message={message}
                  isLatestAIMessage={
                    message.role === "friend" && index === messages.findLastIndex((m) => m.role === "friend")
                  }
                  isNewConversation={isNewConversation}
                />
              ))}
              {showSaveDiaryButton && (
                <div className="bg-grayTrans-20060 py-3 pl-5 whitespace-pre-wrap leading-6 text-sm tracking-wider rounded-full">
                  <button onClick={handleSaveDiary} className="text-left text-gray-600 w-full h-[30px] font-semibold">
                    일기 저장하기
                  </button>
                </div>
              )}
            </ul>
          )}
        </div>
        <div className="flex w-full gap-2 fixed bottom-[88px] left-0 right-0 p-4">
          <button
            onClick={handleCreateDiaryList}
            className="bg-grayTrans-90020 p-5 mb-2 backdrop-blur-xl rounded-xl text-system-white w-[150px] min-w-10 text-sm leading-7 tracking-wide font-semibold"
          >
            일기 작성하기
          </button>
          {/* 아래 공간 띄워주는 용도 div */}
          <div className="h-7"></div>
          <ChatInput
            textRef={textRef}
            handleKeyDown={handleKeyDown}
            handleSendMessage={handleSendMessage}
            isPending={sendMessageMutation.isPending}
          />
        </div>
      </div>
    </>
  );
};

export default FriendChat;
