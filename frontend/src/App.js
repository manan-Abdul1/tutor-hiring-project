import Aboutus from "./pages/About US/Aboutus";
import Faq from "./pages/Faq/Faq";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import MainPageTutors from "./pages/Tutors/MainPageTutors";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Homepage/>}/>
      <Route path="/tutors" element={<MainPageTutors/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
