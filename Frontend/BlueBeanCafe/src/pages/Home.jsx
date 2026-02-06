import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col md:flex-row justify-center items-center px-6 md:px-16 gap-12 font-sans transition-colors duration-300">

      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Master Coding with <span className="text-blue-600 dark:text-blue-400">BlueBean</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Unlock your potential with premium video courses recorded by industry experts. Learn at your own pace and build the future.
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Explore Courses <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900/40 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <img
          className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Coding Workspace"
        />
      </div>
    </div>
  );
};

export default Home;
