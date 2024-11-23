import { useNavigate } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex justify-center items-center text-center">
        <div className="flex flex-col gap-1">
          <div className="flex self-center text-6xl mb-2">
            <BiSolidError />
          </div>
          <div className="uppercase font-bold text-2xl font-serif">
            Page not found
          </div>
          <div>
            <button
              onClick={() => navigate("/")}
              className="p-2 px-4 rounded text-sm bg-yellow-500 text-black font-semibold w-fit right-0 font-serif m-2 hover:bg-yellow-400 active:bg-yellow-500"
            >
              Go to Home page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
