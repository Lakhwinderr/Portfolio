
import './App.css'
import Home from './components/Pages/Home';
import { Route,Routes } from "react-router-dom";
import Education from './components/Pages/Education';
function App() {
  return (
    <div >
      
    <Routes>
      <Route path="/"  element = {<Home/>}></Route>
      <Route path="/Education"  element = {<Education/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
