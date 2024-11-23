import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);

  const imageUploadHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-screen-md w-full flex flex-col justify-center h-screen">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-2xl font-bold font-serif dark:text-yellow-500">
            Register your Account
          </div>
          <div className="mt-4 flex justify-center flex-col items-center">
            {imageSrc ? (
              <img
                className="w-36 h-36 rounded-full border-2 bg-gray-600 border-gray-900 object-cover"
                src={imageSrc}
                alt="Avatar"
              />
            ) : (
              <div className="w-36 font-serif font-semibold text-sm h-36 rounded-full border-2 bg-gray-600 border-gray-900 flex items-center justify-center text-white">
                Add Image
              </div>
            )}
          </div>
          <form className="mt-10 flex flex-col h-full w-full px-8 md:p-0 md:w-2/4 gap-4">
            <div className="flex flex-col">
              <label className="font-serif font-semibold text-sm ">Name</label>
              <input
                placeholder="Abc"
                type="text"
                id="name"
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
                Password
              </label>
              <input
                placeholder="Password"
                id="password"
                type="password"
                className="border-2 dark:border-yellow-300 text-black border-gray-900 rounded text-sm p-1 px-2"
              />
            </div>
            <div className="w-full mt-1">
              <input
                type="file"
                id="avatarInput"
                accept="image/*"
                className="hidden"
                onChange={imageUploadHandler}
              />
              <label
                htmlFor="avatarInput"
                type="button"
                className="dark:bg-white rounded mt-2 flex justify-center w-full p-3 text-sm border border-yellow-500 text-black font-semibold right-0 font-serif active:bg-yellow-500"
              >
                Choose Avatar
              </label>
            </div>
            <div className="w-full mt-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="rounded mt-2 w-full p-3 text-sm bg-yellow-500 text-black font-semibold right-0 font-serif hover:bg-yellow-400 active:bg-yellow-500"
              >
                Sign Up
              </button>
            </div>
            <div className="text-sm font-serif font-semibold">
              <span>Already Signed Up? </span>
              <button
                onClick={() => navigate("/sign-in")}
                type="button"
                className="text-yellow-500"
              >
                {" "}
                Login
              </button>
              <span> here</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
