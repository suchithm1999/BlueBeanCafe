import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const SOCIAL_LINKS = [
    { icon: <AiFillLinkedin />, action: () => window.open("https://www.linkedin.com/in/suchith-m", "_blank") },
    { icon: <AiFillGithub />, action: () => window.open("https://github.com/suchithm1999", "_blank") },
    { icon: <BsInstagram />, action: () => window.open("https://www.instagram.com/suchithshetty_", "_blank") },
    { icon: <BiLogoGmail />, action: () => window.open("mailto:suchithm1999@gmail.com", "_blank") },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 border-t border-gray-100 dark:border-gray-800 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">B</div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">BlueBean<span className="text-blue-600 dark:text-blue-400">Cafe</span></span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} M Suchith. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="text-2xl text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Social Link"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
