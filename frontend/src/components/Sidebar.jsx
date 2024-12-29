import React, { useEffect } from "react";
import { useChatStore } from "../Store/useChatStore";
import { FaBookJournalWhills } from "react-icons/fa6";
import SidebarSkeleton from "../components/skeleton/SideBarSkeleton";

const Sidebar = () => {
  const { users, getUsers, selectedUser, setSelectedUser, isUserLoading } =
    useChatStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (isUserLoading) return <SidebarSkeleton />;
  return (
    <div className=" overflow-y-scroll sm:w-[70%] lg:w-[40%] scrollbar grow select-none">
      {users.map((user) => {
        return (
          <div
            className={`flex gap-2 p-4 hover:border+ ${
              selectedUser === user._id && "bg-base-100"
            }`}
            onClick={() => setSelectedUser(user)}
            key={user._id}
          >
            <img src={`${user.profilePic || "vite.svg"} `} />
            <h3>
              {user.fullName} <span className="block">Offline</span>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
