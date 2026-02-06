import { useState } from "react";
import { FaPlayCircle, FaCheckCircle, FaClock, FaChevronRight } from "react-icons/fa";

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
      title: "Building Custom Hooks",
      videoUrl: "https://www.example.com/video5.mp4",
      duration: "30 min",
      description: "Take your hook skills to the next level by building your own reusable logic."
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(lectures[0]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white font-sans transition-colors duration-300">
      {/* Main Content (Video Player) */}
      <div className="flex-1 flex flex-col p-4 lg:p-6 lg:h-screen overflow-y-auto custom-scrollbar">

        {/* Breadcrumb or Back (Visual only for now) */}
        <div className="mb-4 text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 cursor-pointer hover:text-blue-600 dark:hover:text-white transition-colors">
          <span>Courses</span> <FaChevronRight size={10} /> <span>React Masterclass</span>
        </div>

        {/* Video Wrapper */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video mb-6 ring-1 ring-black/10 dark:ring-white/10">
          <iframe
            className="w-full h-full"
            src={currentVideo.videoUrl}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div className="max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white tracking-tight">{currentVideo.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-1"><FaClock /> {currentVideo.duration}</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-400 font-medium">Beginner</span>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">Description</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {currentVideo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Playlist Sidebar */}
      <div className="lg:w-96 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-white/5 flex flex-col h-[500px] lg:h-screen shadow-xl z-20 transition-colors duration-300">
        <div className="p-6 border-b border-gray-200 dark:border-white/5 bg-white dark:bg-gray-950 sticky top-0 z-10 transition-colors duration-300">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Course Content</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">5 Lectures • 1h 48m Total Length</p>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          <ul className="space-y-1">
            {lectures.map((lecture, index) => {
              const isActive = currentVideo.id === lecture.id;
              return (
                <li
                  key={index}
                  onClick={() => setCurrentVideo(lecture)}
                  className={`group flex items-start p-3 rounded-lg cursor-pointer transition-all duration-200 border border-transparent
                        ${isActive
                      ? "bg-blue-50 dark:bg-blue-600/10 border-blue-200 dark:border-blue-600/20 shadow-sm dark:shadow-inner"
                      : "hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-200 dark:hover:border-white/5"
                    }
                    `}
                >
                  <div className={`mt-1 mr-3 flex-shrink-0 `}>
                    {isActive ? (
                      <FaPlayCircle className="text-blue-600 dark:text-blue-400 text-lg" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-center justify-center text-[10px] text-gray-500 dark:text-gray-500 group-hover:border-gray-600 dark:group-hover:border-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                        {index + 1}
                      </div>
                    )}

                  </div>
                  <div className="flex-1">
                    <h4 className={`text-sm font-medium mb-1 line-clamp-1 ${isActive ? "text-blue-700 dark:text-blue-100" : "text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"}`}>
                      {lecture.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 dark:text-gray-500">{lecture.duration}</span>
                      {isActive && <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Playing</span>}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
