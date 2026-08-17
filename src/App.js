import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import Education from "./components/Pages/Education";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Portfolio" element={<Home />}></Route>
        <Route path="/Portfolio/Education" element={<Education />}></Route>
        <Route path="/Portfolio/About" element={<About />}></Route>
        <Route path="/Portfolio/Contact" element={<Contact />}></Route>
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
