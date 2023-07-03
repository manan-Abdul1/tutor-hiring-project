import Aboutus from "./pages/About US/Aboutus";
import Faq from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import MainPageTutors from "./pages/Tutors/MainPageTutors";
import { Routes, Route } from 'react-router-dom';
import ViewProfile from "./pages/ViewProfile/ViewProfile";
import MainPageRegister from "./pages/Register/MainPageRegister";
import Login from "./pages/Login/Login";
import { useState } from "react";
import RegisterTutor from "./pages/Register/RegisterTutor";
import RegisterStudent from "./pages/Register/RegisterStudent";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      {isRegistered && <Header/>}
      <Routes>
        <Route path="/" element={<MainPageRegister setIsRegistered={setIsRegistered} />} />
        <Route path="/register-tutor" element={<RegisterTutor />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            isRegistered ? (
              <>
                <Route path="/home" element={<Homepage />} />
                <Route path="/tutors" element={<MainPageTutors />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/viewprofile" element={<ViewProfile />} />
              </>
            ) : null
          }
        />
      </Routes>
      {isRegistered && <Footer />}
    </>
  );
}

export default App;
