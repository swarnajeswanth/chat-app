import { FaRegMessage } from "react-icons/fa6";

import { MdOutlineMail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";

const Loginpage = () => {
  const { loginHandler } = useAuthStore();
  const [login, setlogin] = useState({
    password: "",
    email: "",
    togglepassword: true,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler({ email: login.email, password: login.password });
  };

  return (
    <div className="flex h-[calc(700px-48px)]">
      <div className="bg-base-200 text-base-content/70 w-[50%] flex items-center  justify-center">
        <div className=" w-[80] lg:w-[60%]">
          <div className="flex flex-col  items-center text-base-content/70 mb-8 gap-2">
            <span className=" inline-block p-2  rounded-[8px] bg-base-content/70  w-fit">
              <FaRegMessage />
            </span>
            <h3 className=" font-bold">Welcome Back</h3>
            <p className=" opacity-40">Sign in to your account</p>
          </div>
          <form
            className=" opacity-70 flex flex-col gap-4"
            onSubmit={submitHandler}
          >
            <div>
              <label htmlFor="email">Email</label>
              <div className="border border-base-content/70 rounded-[8px] mt-2 p-2 flex items-baseline ">
                <span>
                  <MdOutlineMail className=" inline-block " />
                </span>
                <input
                  id="email"
                  type="text"
                  className="   bg-base-200  outline-none cursor-pointer pl-2 grow"
                  placeholder="email@gmail.com"
                  value={login.email}
                  autoComplete="off"
                  onChange={(e) => {
                    setlogin({ ...login, email: `${e.target.value}` });
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="border border-base-content/70 rounded-[8px] mt-2  p-2 flex items-baseline">
                <span>
                  <IoLockClosedOutline className=" inline-block" />
                </span>
                <input
                  id="password"
                  type={login.togglepassword ? "password" : "text"}
                  className="  bg-base-200 outline-none cursor-pointer pl-2 grow"
                  placeholder="password..."
                  value={login.password}
                  onChange={(e) => {
                    setlogin({ ...login, password: `${e.target.value}` });
                  }}
                />
                <span>
                  <TbLockPassword
                    className="inline-block cursor-pointer"
                    onClick={(prev) => {
                      setlogin({
                        ...login,
                        togglepassword: !login.togglepassword,
                      });
                      console.log(login);
                    }}
                  />
                </span>
              </div>
            </div>
            <input
              type="submit"
              className=" bg-base-content/70 text-base-200  font-bold p-2 w-fit self-center rounded-[8px]"
              value="Login"
            />
          </form>
          <p className="mt-2 text-center opacity-70">
            Don't have an account?{" "}
            <Link to="/signup" className=" underline text-[#b4783d]">
              Create account
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="w-[50%] bg-[#1c121b]">hi</div>
    </div>
  );
};

export default Loginpage;
