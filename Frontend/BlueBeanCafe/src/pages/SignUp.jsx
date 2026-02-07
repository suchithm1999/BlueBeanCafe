
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaUser, FaEnvelope, FaLock, FaCamera, FaSpinner } from "react-icons/fa";
import { AuthService } from "../services/AuthService";
import { loginSuccess } from "../Store/AuthSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student Developer"
  });
  const [roleType, setRoleType] = useState("Student Developer");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await AuthService.signup(formData.name, formData.email, formData.password, imageSrc, formData.role);
      if (result.success) {
        dispatch(loginSuccess(result.user));
        navigate("/");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl dark:border dark:border-gray-700">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-400 tracking-tight">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Join BlueBean Cafe today
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm text-center">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full border-4 border-blue-100 dark:border-gray-700 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              {imageSrc ? (
                <img src={imageSrc} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <FaUser className="text-gray-400 text-3xl" />
              )}
            </div>
            <label htmlFor="avatarInput" className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer">
              <FaCamera size={12} />
            </label>
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              className="hidden"
              onChange={imageUploadHandler}
            />
          </div>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="sr-only">Role</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <select
                id="role"
                name="roleType"
                value={roleType}
                onChange={(e) => {
                  const selectedRole = e.target.value;
                  setRoleType(selectedRole);
                  if (selectedRole !== "Other") {
                    setFormData({ ...formData, role: selectedRole });
                  } else {
                    setFormData({ ...formData, role: "" });
                  }
                }}
                className="appearance-none rounded-lg relative block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors cursor-pointer bg-none"
              >
                <option value="Student Developer">Student Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Instructor">Instructor</option>
                <option value="Hobbyist">Hobbyist</option>
                <option value="Other">Other (Specify)</option>
              </select>
              {/* Custom Chevron Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {roleType === "Other" && (
              <div className="mt-3 relative animate-fadeIn">
                <label htmlFor="customRole" className="sr-only">Specify Role</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-xs">➜</span>
                </div>
                <input
                  id="customRole"
                  name="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full pl-8 pr-3 py-3 border border-blue-300 dark:border-blue-500 bg-blue-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="Please specify your role"
                  autoFocus
                />
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform active:scale-95 shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <FaSpinner className="animate-spin h-5 w-5 text-white" /> : "Sign Up"}
            </button>
          </div>

          <div className="flex items-center justify-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Already have an account?</span>
            <button type="button" onClick={() => navigate("/sign-in")} className="ml-1 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
