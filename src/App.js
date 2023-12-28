import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Parentcomponent from "./components/Parentcomponent";
import UserComponent from "./components/UserComponent";
import EventComponent from "./components/EventComponent";
import AboutComponent from "./components/AboutComponent";
import StoreComponent from "./components/StoreComponent";
import IdeaComponent from "./components/IdeaComponent";

function App() {
  return (
   <div className="App">
<Router>
  <Routes>
    <Route path="/" element={<Parentcomponent/>} />
    <Route path="/home" element={<Parentcomponent/>} />
    <Route path="/user" element={<UserComponent/>} />
    <Route path="/event" element={<EventComponent/>} />
    <Route path="/Store" element={<StoreComponent/>} />
    <Route path="/Idea" element={<IdeaComponent/>} />
    <Route path="/About" element={<AboutComponent/>} />
  </Routes>
</Router>
</div>
  );
}

export default App;
