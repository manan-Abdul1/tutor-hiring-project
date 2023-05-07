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
      </Routes>
    </>
  );
}

export default App;
