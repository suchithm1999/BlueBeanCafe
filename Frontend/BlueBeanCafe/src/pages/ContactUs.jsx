import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:border dark:border-gray-700">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
            <FaEnvelope className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-400 tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm min-h-[120px] transition-colors"
                placeholder="How can we help you?"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e) => e.preventDefault()}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaPaperPlane className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
              </span>
              Send Message
            </button>
          </div>

          <div className="flex items-center justify-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Looking for a specific course?</span>
            <button onClick={() => navigate("/request-course")} className="ml-1 font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500">
              Request it here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
