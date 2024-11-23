import { useNavigate } from "react-router-dom";

const RequestCourse = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-screen-md w-full flex flex-col justify-center h-screen">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-2xl font-bold font-serif dark:text-yellow-500">
            Request New Course
          </div>
          <form className="mt-10 flex flex-col h-full w-full px-8 md:p-0 md:w-2/4 gap-4">
            <div className="flex flex-col">
              <label className="font-serif font-semibold text-sm ">Name</label>
              <input
                placeholder="Abc"
                id="name"
                type="text"
                className="border-2 dark:border-yellow-300 text-black border-gray-900 rounded p-1 px-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-serif font-semibold text-sm ">Email</label>
              <input
                placeholder="abc@gmail.com"
                id="email"
                type="email"
                className="border-2 dark:border-yellow-300 text-black border-gray-900 rounded text-sm p-1 px-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-serif font-semibold text-sm ">
                Course
              </label>
              <textarea
                placeholder="Explain the course..."
                id="course"
                className="border-2 dark:border-yellow-300 text-black border-gray-900 rounded p-1 px-2 h-20 text-sm py-2"
              />
            </div>
            <div className="w-full mt-4">
              <button
                onClick={(e) => e.preventDefault()}
                className="rounded w-full p-3 text-sm bg-yellow-500 text-black font-semibold right-0 font-serif hover:bg-yellow-400 active:bg-yellow-500"
              >
                Send Email
              </button>
            </div>
            <div className="text-sm font-serif font-semibold">
              <span>See available Courses! </span>
              <button
                onClick={() => navigate("/courses")}
                type="button"
                className="text-yellow-500"
              >
                {" "}
                Click
              </button>
              <span> here</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestCourse;
