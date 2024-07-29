"use client";
import useChatSession from "@/hooks/useChatSession";
import { useQuery } from "@tanstack/react-query";
import { AIType, Chat, ChatSession } from "@/types/chat.session.type";
import Link from "next/link";

const SessionsChat = ({ aiType }: { aiType: AIType }) => {
  const { fetchSessionsByType } = useChatSession(aiType);
  const aiTypeText = aiType === "assistant" ? "Assistant" : "Friend";

  const {
    data: sessionChats,
    isPending,
    error,
    isSuccess
  } = useQuery<ChatSession[]>({
    queryKey: [`${aiType}_chat`],
    queryFn: async () => {
      const chats = await fetchSessionsByType(aiType);
      // console.log("chats", chats);
      const filteredChats = chats.filter((chat: ChatSession) => (chat.messages === null ? null : chat));
      return filteredChats;
    }
  });

  console.log("sessionChats", sessionChats);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error : {error?.message}</div>;
  }

  return (
    <div>
      <p>{aiTypeText}</p>
      {isSuccess && sessionChats.length > 0 ? (
        <ul>
          {sessionChats.map((chat, index) => (
            <Link key={index} href={`/chat/${aiType}/${chat.session_id}`}>
              <li>{chat?.summary}</li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No {aiType} chats found</p>
      )}
    </div>
  );
};

export default SessionsChat;
