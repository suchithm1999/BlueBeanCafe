import { useState } from "react";

const CoursePage = () => {
  const lectures = [
    {
      id: "1",
      title: "Introduction to React",
      videoUrl: "https://www.youtube.com/embed/nTKZ9WNZHoE",
      duration: "15 min",
      description:
        "An introduction to React, its features, and how to set up your first React application.",
    },
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

  const [currentVideo, setCurrentVideo] = useState(lectures[0]);

  console.log(currentVideo);

  return (
    <div className="flex md:flex-row flex-col md:min-h-screen md:h-[100%] p-4">
      <div className="flex-1 mt-16 h-screen">
        {/* Embed the video */}
        <iframe
          className="w-full h-56 md:h-5/6"
          src={currentVideo.videoUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="my-2 border p-2 px-4 rounded-xl shadow-lg bg-yellow-50 text-black">
          <div className="text-2xl font-semibold font-serif mt-2">
            {currentVideo.title}
          </div>
          <div className="text-base text-gray-600 font-serif mb-2">
            {currentVideo.description}
          </div>
        </div>
      </div>
      <div className="w-full cursor-pointer md:w-1/4 mt-4 md:mt-16 md:ml-4 border md:h-[95vh] h-[612px] p-4 flex flex-col bg-yellow-50 rounded-xl">
        <h3 className="text-2xl font-serif font-bold text-black">Playlist</h3>
        <ul className="overflow-scroll mb-2">
          {lectures.map((lecture, index) => (
            <li
              onClick={() => setCurrentVideo(lecture)}
              key={index}
              className={`flex overflow-y-scroll active:bg-yellow-200 flex-col my-4 p-4 rounded-lg shadow-lg border border-gray-200 bg-white  transition-all duration-200 ${
                currentVideo.id === lecture.id ? "bg-yellow-200" : ""
              }`}
            >
              <h4 className="font-semibold text-lg mb-2 text-black">
                {lecture.title}
              </h4>
              <p className="text-xs text-gray-700 mb-2">
                {lecture.description}
              </p>
              <span className="text-xs text-gray-500">{lecture.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursePage;
