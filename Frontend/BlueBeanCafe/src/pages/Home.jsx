import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen gap-16 flex flex-col md:flex-row justify-center items-center text-center md:text-right">
      <div className="flex flex-col gap-1">
        <div className="uppercase font-bold text-2xl font-serif">
          Learn from the experts
        </div>
        <div>
          <div className="text-sm font-serif">
            <span>Find professional courses recorded by experts !</span>
          </div>
          <button
            onClick={() => navigate("/courses")}
            className="p-2 px-4 rounded text-sm bg-yellow-500 text-black font-semibold w-fit right-0 font-serif m-2 hover:bg-yellow-400 active:bg-yellow-500"
          >
            Explore Courses
          </button>
        </div>
      </div>
      <div className="animate-bounce">
        <img
          className="w-64 h-64 rounded-full border-8 border-gray-900 dark:border-gray-300"
          src="/src/assets/developer.webp"
        />
      </div>
    </div>
  );
};

export default Home;
