import Aboutus from "./pages/About US/Aboutus";
import Faq from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import MainPageTutors from "./pages/Tutors/MainPageTutors";
import {Routes,Route} from 'react-router-dom'
import ViewProfile from "./pages/ViewProfile/ViewProfile";
import MainPageRegister from "./pages/Register/MainPageRegister";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      {isRegistered && <Header/>}
      {/* <Header/> */}
      <Routes>
      <Route path="/" element={<MainPageRegister setIsRegistered={setIsRegistered}/>}/>
      {
        isRegistered && (
          <>
          <Route path="/home" exact element={<Homepage/>}/>
          <Route path="/tutors" element={<MainPageTutors/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/viewprofile" element={<ViewProfile/>}/>
          </>
        )
      }
          <Route path="/login" element={<Login/>}/>
      </Routes>
      {isRegistered && <Footer/> }
    </>
  );
}

export default App;
