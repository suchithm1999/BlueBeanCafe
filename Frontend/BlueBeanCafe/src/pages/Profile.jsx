import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Profile = () => {
  const playlists = [
    {
      id: "2",
      title: "State and Props",
      videoUrl: "https://www.example.com/video2.mp4",
      duration: "20 min",
      description:
        "Learn about State and Props, which are crucial concepts in React for managing and passing data between components.",
    },
    {
      id: "3",
      title: "Component Lifecycle",
      videoUrl: "https://www.example.com/video3.mp4",
      duration: "18 min",
      description:
        "Understand the lifecycle methods of a React component and how to utilize them for better control of your component's behavior.",
    },
    {
      id: "4",
      title: "Hooks Overview",
      videoUrl: "https://www.example.com/video4.mp4",
      duration: "25 min",
      description:
        "An overview of React hooks, including useState, useEffect, and custom hooks.",
    },
    {
      id: "5",
      title: "Introduction to React",
      videoUrl: "https://www.youtube.com/embed/nTKZ9WNZHoE",
      duration: "15 min",
      description:
        "An introduction to React, its features, and how to set up your first React application.",
    },
    {
      id: "6",
      title: "State and Props",
      videoUrl: "https://www.example.com/video2.mp4",
      duration: "20 min",
      description:
        "Learn about State and Props, which are crucial concepts in React for managing and passing data between components.",
    },
    {
      id: "7",
      title: "Component Lifecycle",
      videoUrl: "https://www.example.com/video3.mp4",
      duration: "18 min",
      description:
        "Understand the lifecycle methods of a React component and how to utilize them for better control of your component's behavior.",
    },
    {
      id: "8",
      title: "Hooks Overview",
      videoUrl: "https://www.example.com/video4.mp4",
      duration: "25 min",
      description:
        "An overview of React hooks, including useState, useEffect, and custom hooks.",
    },
  ];

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
    <div className="flex justify-center font-serif">
      <div className="max-w-screen-lg w-full min-h-screen py-16 p-2 md:p-16">
        <div className="text-2xl text-center md:text-left font-bold dark:text-yellow-500">
          Profile
        </div>
        <div className="flex flex-col justify-between md:flex-row mt-4">
          <div className="mt-4 flex justify-center flex-col items-center">
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
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={imageUploadHandler}
            />
            <label
              htmlFor="profileImage"
              className="mt-4 cursor-pointer text-yellow-500 active:text-yellow-600"
            >
              Change Photo
            </label>
          </div>
          <div className="p-8 gap-8 flex flex-col text-justify md:w-3/4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <span className="font-bold font-serif">Name:</span>
                <span className="text-gray-700 dark:text-gray-300 font-light">
                  M Suchith
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="font-bold font-serif">Email:</span>
                <span className="text-gray-700 dark:text-gray-300 font-light">
                  suchithm1999@gmail.com
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="font-bold font-serif">Created At:</span>
                <span className="text-gray-700 dark:text-gray-300 font-light">
                  {new Date().toISOString().split("T")[0]}
                </span>
              </div>
            </div>
            <div className="flex gap-2 text-sm text-black">
              <button
                onClick={() => navigate("/update-profile")}
                className="p-2 bg-gray-200 rounded active:bg-gray-400 hover:bg-gray-300"
              >
                Update Profile
              </button>
              <button
                onClick={() => navigate("/change-password")}
                className="p-2 bg-gray-200 rounded active:bg-gray-400 hover:bg-gray-300"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div className="border-0 border-b-2 mt-8 dark:border-gray-300 border-gray-900 text-xl font-serif font-bold">
          Playlist
        </div>
        <div className="flex flex-wrap gap-4 !mt-4 m-16 md:m-0 justify-starts">
          {playlists.map((playlist, index) => (
            <>
              <div className="w-full md:w-52 border hover:-translate-y-1 duration-100 cursor-pointer border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={imageSrc}
                  alt="Card Thumbnail"
                  className="w-full h-36 object-cover"
                />
                <div className="flex justify-between items-center p-4 bg-white">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-xs text-black py-2 px-4 rounded font-semibold">
                    Watch Now
                  </button>
                  <button
                    // onClick={onDelete}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
