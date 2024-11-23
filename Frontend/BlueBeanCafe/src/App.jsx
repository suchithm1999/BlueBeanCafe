import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import RequestCourse from "./pages/RequestCourse";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import CoursePage from "./pages/CoursePage";

function App() {
  const { theme } = useSelector((state) => state);
  return (
    <>
      <div
        className={`min-h-screen ${theme} dark:bg-gray-900 dark:text-gray-300`}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/request-course" element={<RequestCourse />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
