import Header from "./pages/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Tutor from "./pages/Tutors/Tutor";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" exact element={<Homepage/>}/>
      <Route path="/tutors" element={<Tutor/>}/>
      </Routes>
    </>
  );
}

export default App;
