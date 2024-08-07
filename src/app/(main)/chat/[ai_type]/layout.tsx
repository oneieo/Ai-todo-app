"use client";
import { PropsWithChildren} from "react";

const ChatLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-scroll">{children}</div>
    </div>
  );
};

export default ChatLayout;