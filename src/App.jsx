import Navbar from "./Components/Navbar";
import NewRoomForm from "./Components/NewRoomForm";
import DisplayPage from "./Components/DisplayPage";
import RoomPage from "./Components/RoomPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return <div className="App tracking-wide">
    <Navbar/>
    <Routes>
      <Route path='/' element={<DisplayPage/>}/>
      <Route path='/createroom' element={<NewRoomForm/>}/>
      <Route path='/joinroom' element={<RoomPage/>}/>
    </Routes>

  </div>;
}

export default App;
