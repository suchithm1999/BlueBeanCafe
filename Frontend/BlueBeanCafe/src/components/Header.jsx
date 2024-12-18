import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Store/ThemeSlice";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { RiMenuFold4Fill } from "react-icons/ri";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  const isAuthenticated = true;
  const [showSidebar, toggleSidebar] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const handleSidebarToggle = () => {
    toggleSidebar(!showSidebar);
  };

  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <div className="flex">
        <button
          className="p-2 px-2 rounded fixed bg-yellow-500 text-2xl text-black right-0 mr-5 my-5 hover:bg-yellow-400 active:bg-yellow-500"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <MdSunny /> : <MdDarkMode />}
        </button>
      </div>
      <div className="relative">
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
            onClick={handleSidebarToggle}
          ></div>
        )}

        <div
          className={` bg-white dark:bg-gray-800 md:w-1/5 w-4/5 ease-in-out fixed h-full transition-all duration-300 ${
            showSidebar ? "left-0" : "md:-left-1/4 -left-full"
          } top-0 z-20`}
        >
          {/* sidebar content */}
          <div className="dark:text-gray-300 text-gray-800 h-full">
            <div className="text-2xl p-2 text-center font-sans font-bold">
              Blue Bean Cafe
            </div>
            <div className="border border-gray-700 border-b border-y-2"></div>
            <div className="flex flex-col justify-between h-full">
              <div className="mt-8 h-full flex flex-col gap-96">
                <div
                  className={`flex gap-4 p-2 px-4 items-start mt-2 flex-col dark:text-gray-200 text-gray-600`}
                >
                  <Link
                    to={"/"}
                    onClick={handleSidebarToggle}
                    className={`text-lg font-serif font-semibold text-center ${
                      isActive("/") ? "text-yellow-500" : ""
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    to={"/courses"}
                    onClick={handleSidebarToggle}
                    className={`text-lg font-serif font-semibold text-center ${
                      isActive("/courses") ? "text-yellow-500" : ""
                    }`}
                  >
                    Browse All Courses
                  </Link>

                  <Link
                    to={"request-course"}
                    onClick={handleSidebarToggle}
                    className={`text-lg font-serif font-semibold text-center ${
                      isActive("/request-course") ? "text-yellow-500" : ""
                    }`}
                  >
                    Request a Course
                  </Link>

                  <Link
                    to={"/contact-us"}
                    onClick={handleSidebarToggle}
                    className={`text-lg font-serif font-semibold text-center ${
                      isActive("/contact-us") ? "text-yellow-500" : ""
                    }`}
                  >
                    Contact Us
                  </Link>

                  <Link
                    to={"about"}
                    onClick={handleSidebarToggle}
                    className={`text-lg font-serif font-semibold text-center ${
                      isActive("/about") ? "text-yellow-500" : ""
                    }`}
                  >
                    About
                  </Link>
                </div>
                {isAuthenticated ? (
                  <div className="flex items-center justify-center w-full">
                    <div>
                      <button
                        onClick={() => {
                          handleSidebarToggle();
                          navigate("/profile");
                        }}
                        className="p-2 px-4 rounded text-sm text-yellow-500 font-semibold w-fit right-0 font-serif m-2"
                      >
                        Profile
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          // Add logout logic
                          // navigate("/sign-up");
                          handleSidebarToggle();
                        }}
                        className="p-2 px-4 rounded flex items-center gap-1 text-sm text-black font-semibold w-fit right-0 font-serif m-2"
                      >
                        <RiLogoutBoxLine /> Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <div>
                      <button
                        onClick={() => {
                          handleSidebarToggle();
                          navigate("/sign-in");
                        }}
                        className="p-2 px-4 rounded text-sm bg-yellow-500 text-black font-semibold w-fit right-0 font-serif m-2 hover:bg-yellow-400 active:bg-yellow-500"
                      >
                        Sign In
                      </button>
                    </div>
                    or
                    <div>
                      <button
                        onClick={() => {
                          navigate("/sign-up");
                          handleSidebarToggle();
                        }}
                        className="p-2 px-4 rounded text-sm bg-yellow-500 text-black font-semibold w-fit right-0 font-serif m-2 hover:bg-yellow-400 active:bg-yellow-500"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          className={`absolute rounded top-5 md:text-4xl text-3xl p-1 z-30 ${
            showSidebar ? "md:left-[21%] left-[70%]" : "left-5"
          } transition-all duration-300 bg-yellow-500 text-black md:!bg-transparent md:text-yellow-500`}
          onClick={handleSidebarToggle}
        >
          <RiMenuFold4Fill
            className={`md:p-0 transform ${
              showSidebar ? "scale-x-[-1]" : "scale-x-100"
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default Header;
