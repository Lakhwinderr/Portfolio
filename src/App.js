
import './App.css'
import Home from './components/Pages/Home';
import { Route,Routes } from "react-router-dom";
import Education from './components/Pages/Education';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
function App() {
  return (
    <div >
      
    <Routes>
      <Route path="/"  element = {<Home/>}></Route>
      <Route path="/Education"  element = {<Education/>}></Route>
      <Route path="/About"  element = {<About/>}></Route>
      <Route path="/Contact"  element = {<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
