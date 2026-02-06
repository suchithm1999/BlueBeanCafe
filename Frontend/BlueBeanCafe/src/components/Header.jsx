import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Store/ThemeSlice";
import { logout } from "../Store/AuthSlice";
import { MdDarkMode, MdSunny, MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Request", path: "/request-course" },
    { name: "Contact", path: "/contact-us" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-50 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">B</div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">BlueBean<span className="text-blue-600 dark:text-blue-400">Cafe</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${isActive(link.path)
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <MdSunny className="text-yellow-500 text-xl" /> : <MdDarkMode className="text-blue-400 text-xl" />}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <button onClick={() => navigate("/profile")} className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  {user?.avatar && <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />}
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <RiLogoutBoxLine /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button onClick={() => navigate("/sign-in")} className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Sign In</button>
                <button onClick={() => navigate("/sign-up")} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {theme === "light" ? <MdSunny className="text-yellow-500" /> : <MdDarkMode className="text-blue-400" />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 dark:border-gray-800 my-2 pt-2">
              {isAuthenticated ? (
                <>
                  <button onClick={() => { navigate("/profile"); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Profile</button>
                  <button onClick={handleLogout} className="flex w-full items-center gap-2 px-3 py-3 text-base font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md">
                    <RiLogoutBoxLine /> Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 mt-2">
                  <button onClick={() => { navigate("/sign-in"); setIsMenuOpen(false); }} className="w-full text-center py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold">Sign In</button>
                  <button onClick={() => { navigate("/sign-up"); setIsMenuOpen(false); }} className="w-full text-center py-2 bg-blue-600 text-white rounded-lg font-semibold shadow">Sign Up</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
