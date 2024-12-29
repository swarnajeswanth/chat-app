import { FaRegMessage } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { useAuthStore } from "../Store/useAuthStore";
import { useThemeStore } from "../Store/useThemeStore";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isLoggedIn, logoutHandler } = useAuthStore();
  const { theme } = useThemeStore();
  return (
    <div
      data-theme={theme}
      className=" text-base-content/70 flex justify-between p-2 pl-4 pr-4"
    >
      <Link to="/" className="flex gap-2">
        <span className=" inline-block p-2   rounded-[8px] bg-base-content/70  text-secondary w-fit">
          <FaRegMessage />
        </span>
        <h4 className=" self-center">upWhat</h4>
      </Link>
      <div
        className={
          isLoggedIn
            ? "justify-between " +
              `flex gap-2 items-baseline sm:w-[35%] lg:w-[20%]  `
            : "justify-end pr-2  " +
              `flex gap-2 items-baseline sm:w-[35%] lg:w-[20%] `
        }
      >
        <Link to="/setting" className="flex items-baseline ">
          <span className="pr-2">
            <CiSettings />
          </span>
          <h5>Settings</h5>
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/profile" className="flex items-baseline align">
              <span className="pr-2">
                <CgProfile />
              </span>
              <h5>Profile</h5>
            </Link>

            <div
              className="flex items-baseline cursor-pointer"
              onClick={() => logoutHandler()}
            >
              <span className="pr-2 ">
                <CiLogout />
              </span>
              <h5>Logout</h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
