import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete, MdEdit, MdCameraAlt } from "react-icons/md";
import { FaUser, FaEnvelope, FaCalendarAlt, FaPlay, FaClock, FaStar } from "react-icons/fa";
import { AuthService } from "../services/AuthService";
import { updateUserPlaylist } from "../Store/AuthSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  const handleRemoveFromPlaylist = async (courseId) => {
    const result = await AuthService.removeFromPlaylist(courseId);
    if (result.success) {
      const updatedPlaylist = user.playlist.filter(p => p.id !== courseId);
      dispatch(updateUserPlaylist(updatedPlaylist));
    }
  };

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-colors duration-300">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700"></div>
          <div className="px-8 pb-8 flex flex-col md:flex-row gap-8 -mt-16">

            {/* Avatar Section */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-36 h-36 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 overflow-hidden shadow-md">
                  {imageSrc || user.avatar ? (
                    <img src={imageSrc || user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <FaUser className="text-5xl" />
                  )}
                </div>
                <label htmlFor="profileImage" className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-700 hover:scale-110 transition-all">
                  <MdCameraAlt />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  className="hidden"
                  onChange={imageUploadHandler}
                />
              </div>
              <div className="mt-4 text-center md:hidden">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                <p className="text-blue-600 dark:text-blue-400 text-sm">{user.role || 'Student Developer'}</p>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 pt-4 md:pt-16 space-y-6">
              <div className="hidden md:block">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{user.role || 'Student Developer'}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Email Address</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Joined</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{new Date(user.joinedAt || Date.now()).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => navigate("/update-profile")}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-sm"
                >
                  <MdEdit /> Edit Profile
                </button>
                <button
                  onClick={() => navigate("/change-password")}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pl-2 border-l-4 border-blue-600">My Playlist</h3>
          {user?.playlist && user.playlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {user.playlist.map((course) => (
                <div
                  key={course.id}
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:border dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-36 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <button className="absolute inset-0 m-auto w-10 h-10 bg-white/90 dark:bg-black/60 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                      <FaPlay className="pl-1" size={14} />
                    </button>
                    <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                      <FaClock /> {course.duration || "N/A"}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">{course.category}</span>
                      <div className="flex items-center gap-1 text-[10px] text-yellow-500 font-bold">
                        <FaStar /> {course.rating}
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-2 mb-3">{course.title}</h4>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                      <button onClick={() => navigate(`/course/${course.id}`)} className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">Watch Now</button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFromPlaylist(course.id);
                        }}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 mb-4">Your playlist is empty.</p>
              <button onClick={() => navigate("/courses")} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Browse Courses</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
