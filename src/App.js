import "./App.css";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Education from "./components/Pages/Education";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Work from "./components/Pages/Work";
import { ProjectProvider } from "./components/Card/Card";
function App() {
  return (
    <div>
      <ProjectProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Work" element={<Work />}></Route>
        </Routes>
      </ProjectProvider>
    </div>
  );
}

export default App;
