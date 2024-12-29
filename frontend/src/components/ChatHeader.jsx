import React from "react";
import { useChatStore } from "../Store/useChatStore";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const ChatHeader = () => {
  const { selectedUser, closeChatContainer } = useChatStore();
  return (
    <div className="flex p-2 justify-between items-center">
      <div className="flex">
        <img src="vite.svg" className="pr-2" />
        <span>
          <h3>{selectedUser.fullName}</h3>
          <p>offline</p>
        </span>
      </div>
      <button onClick={() => closeChatContainer()}>
        <IoIosClose />
      </button>
    </div>
  );
};

export default ChatHeader;
