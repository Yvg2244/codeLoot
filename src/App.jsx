import Navbar from "./Components/Navbar";
import NewRoomForm from "./Components/NewRoomForm";
import DisplayPage from "./Components/DisplayPage";
import RoomPage from "./Components/RoomPage";
import { Route, Routes } from "react-router-dom";
import WalletPage from "./Components/WalletPage";
import Contest from "./Components/Contest";
import Admin from "./Components/Admin";

function App() {
  return <div className="App tracking-wide">
    <Navbar/>
    <Routes>
      <Route path='/' element={<DisplayPage/>}/>
      <Route path='/createroom' element={<NewRoomForm/>}/>
      <Route path='/joinroom' element={<RoomPage/>}/>
      <Route path='/wallet' element={<WalletPage/>}/>
      <Route path='/contest' element={<Contest/>}/>
      <Route path='/admin' element={<Admin/>}/>

    </Routes>

  </div>;
}

export default App;
