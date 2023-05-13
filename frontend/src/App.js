import Aboutus from "./pages/About US/Aboutus";
import Faq from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import MainPageTutors from "./pages/Tutors/MainPageTutors";
import {Routes,Route} from 'react-router-dom'
import ViewProfile from "./pages/ViewProfile/ViewProfile";
import MainPageRegister from "./pages/Register/MainPageRegister";

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Homepage/>}/>
      <Route path="/tutors" element={<MainPageTutors/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/viewprofile" element={<ViewProfile/>}/>
      <Route path="/registertutor" element={<MainPageRegister/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
