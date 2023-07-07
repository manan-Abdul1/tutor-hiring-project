import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      {isRegistered && <Header />}
      <Routes>
        {isRegistered ? (
          <>
            <Route path="/home" element={<Homepage />} />
            <Route path="/tutors" element={<MainPageTutors />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/viewprofile" element={<ViewProfile />} />
            <Route path="/teacher-home" element={<TeacherDashboard />} />
          </>
        ) : (
          <Route path="/" element={<MainPageRegister setIsRegistered={setIsRegistered} />} />
        )}
        <Route path="/register-tutor" element={<RegisterTutor />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/login" element={<Login setIsRegistered={setIsRegistered} />} />
      </Routes>
      {isRegistered && <Footer />}
    </>
  );
}

export default App;
