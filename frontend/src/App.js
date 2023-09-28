import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux'
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
import PrivateRouting from "./components/PrivateRouting/PrivateRouting";
import TeacherRequestList from "./pages/TeacherDashboard/TeacherRequestList";
import Meetings from "./pages/Meetings/Meetings";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/home" element={<PrivateRouting><Homepage /></PrivateRouting>} />
        <Route path="/tutors" element={<PrivateRouting><MainPageTutors /></PrivateRouting>} />
        <Route path="/faq" element={<PrivateRouting><Faq /></PrivateRouting>} />
        <Route path="/about" element={<PrivateRouting><Aboutus /></PrivateRouting>} />
        <Route path="/viewprofile/:id" element={<PrivateRouting><ViewProfile /></PrivateRouting>} />
        <Route path="/profile" element={<PrivateRouting><StudentProfile /></PrivateRouting>} />
        <Route path="/teacher-home" element={<PrivateRouting><TeacherDashboard /></PrivateRouting>} />
        <Route path="/teacher-requests" element={<PrivateRouting><TeacherRequestList /></PrivateRouting>} />
        <Route path="/teacher-scheduled-meetings" element={<PrivateRouting><Meetings /></PrivateRouting>} />
        <Route path="/" element={<MainPageRegister />} />
        <Route path="/register-tutor" element={<RegisterTutor />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {isAuthenticated && <Footer />}
    </>
  );

}

export default App;
