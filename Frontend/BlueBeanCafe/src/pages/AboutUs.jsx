const AboutUs = () => {
  return (
    <div className="flex justify-center font-serif">
      <div className="max-w-screen-lg shadow-2xl w-full min-h-screen py-16 p-2 md:p-16">
        <div className="text-2xl text-center md:text-left font-bold dark:text-yellow-500">
          About Us
        </div>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="mt-4 flex justify-center flex-col items-center">
            <img
              className="w-64 h-64 rounded-full border-2 border-gray-900 object-cover bg-gray-900"
              src="/src/assets/logo.svg"
            />
            <div className="mt-2 text-gray-600 dark:text-yellow-500">
              Blue Bean Cafe
            </div>
          </div>
          <div className="p-8 gap-4 flex flex-col text-justify md:w-3/4">
            <div className="text-2xl font-bold text-center md:text-left">
              Blue Bean Cafe
            </div>
            <div className="text-gray-600 dark:text-yellow-500">
              Blue Bean Cafe is a learning platform where users can access
              professional programming courses recorded by industry experts. It
              offers a wide range of coding topics, from beginner to advanced,
              covering popular programming languages and technologies. The
              platform is completely free, making high-quality tech education
              accessible to everyone. With its user-friendly interface, Blue
              Bean Cafe is the perfect place to start or enhance your coding
              journey.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="mt-4 flex justify-center flex-col items-center">
            <img
              className="w-64 h-64 rounded-full border-2 border-gray-900 object-cover bg-gray-900"
              src="/src/assets/suchith.jpg"
            />
            <div className="mt-2 text-gray-600 dark:text-yellow-500">
              Full-Stack Developer
            </div>
          </div>
          <div className="p-8 gap-4 flex flex-col text-justify md:w-3/4">
            <div className="text-2xl font-bold text-center md:text-left">
              M Suchith
            </div>
            <div className="text-gray-600 dark:text-yellow-500">
              Full-Stack Software Development Engineer with 2+ years of
              experience in MERN and MEAN stacks, skilled in building scalable
              and secure applications using ReactJS, Angular, Node.js, and
              MongoDB. Proficient in developing RESTful APIs and integrating
              them with front-end components for seamless functionality. Adept
              at delivering high-performance web and mobile solutions with a
              focus on Agile methodologies and collaboration.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
