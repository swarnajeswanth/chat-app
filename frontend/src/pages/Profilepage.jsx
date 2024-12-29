import { TiCameraOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { useAuthStore } from "../Store/useAuthStore";
import { useState } from "react";
const Profilepage = () => {
  const { authUser } = useAuthStore();
  const [selectedImg, setSelectedimg] = useState(null);
  const uploadHandler = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      console.log(base64Image);
      setSelectedimg(base64Image);
    };
  };
  return (
    <div className="flex justify-center h-[calc(700px-48px)] bg-base-100">
      <div className="text-base-content/70 flex flex-col gap-4 w-[80%] ">
        <div className="flex flex-col gap-2 items-center">
          <h3 className=" tracking-widest">
            {authUser.fullName.toUpperCase()}
          </h3>
          <p>Your Profile information</p>
        </div>
        <div className="  self-center h-auto flex flex-col justify-between w-[50%]">
          <div className="relative self-center">
            <img
              src={selectedImg || "vite.svg"}
              className=" bg-no-repeat inline-block w-[130px] h-[130px]   rounded-full   "
            />
            <label
              htmlFor="avatar-upload"
              className="bg-base-content/40 inline-block p-[2px] rounded-full absolute right-0 bottom-0"
            >
              {" "}
              <TiCameraOutline className="text-center text-base-200 text-[20px] h-[40%] cursor-pointer " />
            </label>

            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => uploadHandler(e)}
            />
          </div>
          <p className="text-base-content/70 opacity-50  text-center">
            Click the camera icon to update your photo
          </p>
        </div>
        <div className="p-4 flex flex-col gap-4 ali grow ">
          <div className="flex flex-col gap-4">
            <span className="flex gap-2  items-center">
              <CgProfile /> <h4>Full Name</h4>
            </span>
            <div className="text-base-content/70 p-3 rounded-[8px] pl-2 border border-base-content/70">
              {authUser.fullName}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex gap-2 items-center">
              <MdOutlineMail /> <h4>Email Address</h4>
            </span>
            <div className="text-base-content/70 p-3 rounded-[8px] pl-2 border border-base-content/70">
              {authUser.email}
            </div>
          </div>
        </div>
        <div className="grow flex flex-col justify-items-start gap-4 pl-10 pr-10">
          <h3>Account Information</h3>
          <div>
            <span className="flex  justify-between gap-2">
              <h5>Member Since</h5>
              <h6>{new Date().getFullYear(authUser.createdAt)}</h6>
            </span>
            <hr className="mt-2 mb-2 border-base-content/70" />
            <span className="flex  justify-between gap-2">
              <h5>Account Status</h5>
              <h6>{authUser.createdAt ? "Active" : " Inactive"}</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

//
export default Profilepage;
