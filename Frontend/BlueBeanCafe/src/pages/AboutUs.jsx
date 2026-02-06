import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400 tracking-tight sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Building the future of tech education, one line of code at a time.
          </p>
        </div>

        {/* Company Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-colors duration-300">
          <div className="md:w-1/3 bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center p-8">
            <div className="w-48 h-48 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-6xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              B
            </div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blue Bean Cafe</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Blue Bean Cafe is a premier learning platform dedicated to democratizing tech education.
              We provide high-quality, professional programming courses recorded by industry experts.
              From absolute beginners to advanced engineers, our mission is to make coding accessible,
              engaging, and free for everyone.
            </p>
          </div>
        </div>

        {/* Developer Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse transition-colors duration-300">
          <div className="md:w-1/3 bg-gray-100 dark:bg-gray-700/50 flex flex-col items-center justify-center p-8">
            <img
              src="/src/assets/suchith.jpg"
              alt="M Suchith"
              className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">M Suchith</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-center">Senior Associate Software Development Engineer</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/suchithm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/suchithm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.instagram.com/suchithshetty_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Meet the Creator</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Senior Associate Software Development Engineer with 2+ years of experience building scalable, high-performance web
              applications using ReactJS, Angular, Node.js, NestJS, and MongoDB. Strong background in microservices, distributed systems,
              RESTful APIs, and Kafka-based data pipelines. Proven ability to deliver maintainable code with 95%+ unit test coverage,
              reduce QA effort by 50%, and improve release stability through automation and CI/CD.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
