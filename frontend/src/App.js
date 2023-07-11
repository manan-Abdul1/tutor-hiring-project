import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import MainPageTutors from "./pages/Tutors/MainPageTutors";
import Faq from "./pages/Faq/Faq";
import Aboutus from "./pages/About US/Aboutus";
import ViewProfile from "./pages/ViewProfile/ViewProfile";
import MainPageRegister from "./pages/Register/MainPageRegister";
import Login from "./pages/Login/Login";
import RegisterTutor from "./pages/Register/RegisterTutor";
import RegisterStudent from "./pages/Register/RegisterStudent";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import StudentProfile from "./pages/StudentProfile/StudentProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const checkUserLogin = () => {
      const currentUser = JSON.parse(localStorage.getItem("currentuser"));
      setIsLoggedIn(!!currentUser);
      setIsTeacher(currentUser?.role === "tutor");
    };

    checkUserLogin();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    setIsLoggedIn(false);
    setIsTeacher(false);
    navigate("/login");
  };
  console.log(isTeacher)

  return (
    <>
      {isLoggedIn && <Header isTeacher={isTeacher}  handleLogout={handleLogout} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Homepage />} />
            <Route path="/tutors" element={<MainPageTutors />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/viewprofile" element={<ViewProfile />} />
            <Route path="/profile" element={<StudentProfile />} />
            {isTeacher && <Route path="/teacher-home" element={<TeacherDashboard />} />}
          </>
        ) : (
          <>
            <Route
              path="/"
              element={<MainPageRegister setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/register-tutor"
              element={<RegisterTutor />}
            />
            <Route
              path="/register-student"
              element={<RegisterStudent />}
            />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
          </>
        )}
      </Routes>
      {isLoggedIn && <Footer />}
    </>
  );
  
}

export default App;
