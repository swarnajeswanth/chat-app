import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import { useChatStore } from "../Store/useChatStore";
const Homepage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-[calc(700px-48px)] flex gap-6   p-4 bg-base-200 border border">
      <div className="w-[40%] flex flex-col gap-2">
        <div className=" flex flex-col h-[12%] gap-2 ">
          <div className="flex gap-2 pl-2 items-center">
            <CgProfile />
            <h3>Contacts</h3>
          </div>
          <div className="ml-[3%]   flex gap-3">
            <input type="checkbox" />
            <span>Show online only (0 online)</span>
          </div>
        </div>
        <Sidebar />
      </div>
      {selectedUser ? (
        <ChatContainer />
      ) : (
        <div className="ml-4 flex justify-center items-center ">
          <div className="w-[80%] flex flex-col gap-3 items-center justify-center  h-[60%]">
            <span className="bg-base-content/70 rounded-[8px] inline-block p-2 animate-bounce ">
              <FaRegMessage className="text-[30px] " />
            </span>
            <h2>Welcome to upWhat!</h2>
            <p className=" opacity-40">
              Select a Conversation from the sidebar to start chatting
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
