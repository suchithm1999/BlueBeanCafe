import { useState } from "react";
import { FaSearch, FaStar, FaClock, FaBookOpen } from "react-icons/fa";
import { MdPlayCircleFilled, MdPlaylistAdd, MdCheck } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthService } from "../services/AuthService";
import { updateUserPlaylist } from "../Store/AuthSlice";

const Courses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // Local state for checking which courses are adding/added
  const [addingToPlaylist, setAddingToPlaylist] = useState({});

  const handleAddToPlaylist = async (course, e) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      navigate("/sign-in");
      return;
    }

    setAddingToPlaylist(prev => ({ ...prev, [course.id]: 'loading' }));

    try {
      const result = await AuthService.addToPlaylist(course);
      if (result.success) {
        // Update Redux state with new playlist
        const currentPlaylist = user.playlist || [];
        if (!currentPlaylist.find(p => p.id === course.id)) {
          dispatch(updateUserPlaylist([...currentPlaylist, course]));
        }
        setAddingToPlaylist(prev => ({ ...prev, [course.id]: 'success' }));
      } else if (result.message === 'Already in playlist') {
        setAddingToPlaylist(prev => ({ ...prev, [course.id]: 'success' }));
      } else {
        setAddingToPlaylist(prev => ({ ...prev, [course.id]: 'error' }));
      }
    } catch (error) {
      console.error("Failed to add to playlist", error);
      setAddingToPlaylist(prev => ({ ...prev, [course.id]: 'error' }));
    }
  };

  const isCourseInPlaylist = (courseId) => {
    return user?.playlist?.some(p => p.id === courseId);
  };

  const categories = [
    "All",
    "React",
    "JavaScript",
    "Styling",
    "Backend"
  ];

  const courses = [
    {
      id: "1",
      title: "Complete React Guide 2024",
      instructor: "Maximilian Schwarzmüller",
      rating: 4.8,
      students: "15k+",
      duration: "42h 30m",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
      category: "React",
      level: "All Levels",
      description: "Dive into React from scratch! Learn hooks, Redux, React Router, Next.js, and more.",
    },
    {
      id: "2",
      title: "JavaScript: The Hard Parts",
      instructor: "Will Sentance",
      rating: 4.9,
      students: "8k+",
      duration: "10h 15m",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwu5xxE964ptBXnZuqA.png",
      category: "JavaScript",
      level: "Advanced",
      description: "Deep dive into JS closures, protytypes, async, and higher-order functions.",
    },
    {
      id: "3",
      title: "Tailwind CSS from Scratch",
      instructor: "Brad Traversy",
      rating: 4.7,
      students: "12k+",
      duration: "12h 00m",
      image: "https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-23-tailwind-css-grid/social-2.png",
      category: "Styling",
      level: "Beginner",
      description: "Build modern websites faster with the utility-first CSS framework.",
    },
    {
      id: "4",
      title: "Node.js API Masterclass",
      instructor: "Jonas Schmedtmann",
      rating: 4.8,
      students: "10k+",
      duration: "20h 00m",
      image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-Node.js-1.jpg",
      category: "Backend",
      level: "Intermediate",
      description: "Build scalable REST APIs with Node.js, Express, and MongoDB.",
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">

      {/* Header / Search Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Explore Courses</h1>

          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
            </div>


          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto gap-3 mt-8 pb-2 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/30"
                  : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl dark:border dark:border-gray-700 overflow-hidden cursor-pointer group transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Wrapper */}
              <div className="relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <span className="absolute top-3 left-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded text-gray-800 dark:text-white uppercase tracking-wider">
                  {course.category}
                </span>
                {isCourseInPlaylist(course.id) || addingToPlaylist[course.id] === 'success' ? (
                  <button className="absolute top-3 right-3 p-2 bg-green-500 text-white rounded-full shadow-lg z-10" title="Added to Playlist">
                    <MdCheck size={20} />
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleAddToPlaylist(course, e)}
                    className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 z-10"
                    title="Add to Playlist"
                  >
                    <MdPlaylistAdd size={20} />
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                    <FaStar /> {course.rating}
                    <span className="text-gray-400 font-normal ml-1">({course.students})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <FaClock size={10} /> {course.duration}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      {/* Placeholder Avatar */}
                      <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-purple-500"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300 truncate max-w-[100px]">{course.instructor}</span>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                    Watch <FaBookOpen size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500 dark:text-gray-400">No courses found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
