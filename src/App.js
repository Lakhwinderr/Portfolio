import "./App.css";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Education from "./components/Pages/Education";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Work from "./components/Pages/Work";
import ScrollToTop from "./components/ScrollToTop";
import { ProjectProvider } from "./components/Card/Card";
function App() {
  return (
    <div>
      <ProjectProvider>
        <Routes>
          <Route path="/Portfolio" element={<Home />}></Route>
          <Route path="/Portfolio/Education" element={<Education />}></Route>
          <Route path="/Portfolio/About" element={<About />}></Route>
          <Route path="/Portfolio/Contact" element={<Contact />}></Route>
          <Route path="/Portfolio/Work" element={<Work />}></Route>
        </Routes>
        <ScrollToTop />
      </ProjectProvider>
    </div>
  );
}

export default App;
