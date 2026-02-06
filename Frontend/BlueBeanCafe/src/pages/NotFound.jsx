import { useNavigate } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center text-center px-4 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl dark:border dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
        <div className="flex flex-col items-center gap-4">
          <div className="text-yellow-500 text-8xl animate-bounce">
            <BiSolidError />
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Oops! The page you are looking for does not exist or has been moved.
          </p>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <FaHome /> Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
