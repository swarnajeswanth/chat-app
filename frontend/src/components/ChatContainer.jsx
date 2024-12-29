import React, { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatInputContainer from "./ChatInputContainer";
import MessageSkeleton from "./skeleton/MessageSkeleton";
import { useChatStore } from "../Store/useChatStore";
import { useAuthStore } from "../Store/useAuthStore";
import MessagesContainer from "./messagesContainer";

const ChatContainer = () => {
  const { selectedUser, messages, getMessages } = useChatStore();
  const { authUser } = useAuthStore();
  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser]);
  return (
    <div className=" w-[60%] flex flex-col">
      <ChatHeader />
      <div className="grow overflow-y-scroll">
        <MessagesContainer />
      </div>
      <ChatInputContainer />
    </div>
  );
};

export default ChatContainer;
