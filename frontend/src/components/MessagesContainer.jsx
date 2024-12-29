import React, { useEffect } from "react";
import { useChatStore } from "../Store/useChatStore";
import { useAuthStore } from "../Store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const MessagesContainer = () => {
  const { selectedUser, messages, getMessages } = useChatStore();
  const { authUser } = useAuthStore();
  useEffect(() => {}, [messages]);
  return (
    <>
      {messages.map((message) => {
        return (
          <div
            key={message._id}
            className={`chat ${
              message.senderId === authUser._id ? "chat-end" : "chat-start"
            }`}
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full ">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/vite.svg"
                      : selectedUser.profilePic || "/vite.svg"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MessagesContainer;
