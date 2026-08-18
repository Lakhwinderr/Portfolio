import Home from "./components/Pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Education from "./components/Pages/Education";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { routes } from "./config/paths";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.education} element={<Education />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
