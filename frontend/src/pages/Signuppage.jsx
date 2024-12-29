import { FaRegMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
const Signuppage = () => {
  const { signupHandler } = useAuthStore();
  const [signup, setSignup] = useState({
    password: "",
    fullname: "",
    email: "",
    togglepassword: true,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler({
      fullName: signup.fullname,
      email: signup.email,
      password: signup.password,
    });
  };

  return (
    <div className="flex h-[calc(700px-48px)]">
      <div className="bg-[#1e151e] text-white w-[50%] flex items-center  justify-center">
        <div className=" w-[80] lg:w-[60%]">
          <div className="flex flex-col  items-center text-[#b4783d] mb-8 gap-2">
            <span className=" inline-block p-2  rounded-[8px] bg-[#37231c]  w-fit">
              <FaRegMessage />
            </span>
            <h3 className=" font-bold">Create Account</h3>
            <p className=" opacity-40">Get started with your free account</p>
          </div>
          <form
            className=" opacity-70 flex flex-col gap-4"
            onSubmit={submitHandler}
          >
            <div>
              <label for="fullname">Full Name</label>
              <div className="border border-[#463044] rounded-[8px] mt-2 p-2">
                <span>
                  <CgProfile className=" inline-block" />
                </span>
                <input
                  id="fullname"
                  type="text"
                  className="  bg-[#1e151e] outline-none cursor-pointer pl-2 "
                  placeholder="Swarna Jeswanth"
                  value={signup.fullname}
                  onChange={(e) => {
                    setSignup({ ...signup, fullname: `${e.target.value}` });
                  }}
                />
              </div>
            </div>
            <div>
              <label for="email">Email</label>
              <div className="border border-[#463044] rounded-[8px] mt-2 p-2">
                <span>
                  <MdOutlineMail className=" inline-block" />
                </span>
                <input
                  id="email"
                  type="text"
                  className="  bg-[#1e151e] outline-none cursor-pointer pl-2"
                  placeholder="email@gmail.com"
                  value={signup.email}
                  onChange={(e) => {
                    setSignup({ ...signup, email: `${e.target.value}` });
                  }}
                />
              </div>
            </div>
            <div>
              <label for="password">Password</label>
              <div className="border border-[#463044] rounded-[8px] mt-2  p-2 flex items-baseline">
                <span>
                  <IoLockClosedOutline className=" inline-block" />
                </span>
                <input
                  id="password"
                  type={signup.togglepassword ? "password" : "text"}
                  className="  bg-[#1e151e] outline-none cursor-pointer pl-2 grow"
                  placeholder="password..."
                  value={signup.password}
                  onChange={(e) => {
                    setSignup({ ...signup, password: `${e.target.value}` });
                  }}
                />
                <span>
                  <TbLockPassword
                    className="inline-block cursor-pointer"
                    onClick={(prev) => {
                      setSignup({
                        ...signup,
                        togglepassword: !signup.togglepassword,
                      });
                      console.log(signup);
                    }}
                  />
                </span>
              </div>
            </div>
            <input
              type="submit"
              className=" bg-[#b2773e] text-black  font-bold p-2 w-fit self-center rounded-[8px]"
              value="Create Account"
            />
          </form>
          <p className="mt-2 text-center opacity-70">
            Already have an account?{" "}
            <Link to="/login" className=" underline text-[#b4783d]">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="w-[50%] bg-[#1c121b]">hi</div>
    </div>
  );
};

export default Signuppage;
