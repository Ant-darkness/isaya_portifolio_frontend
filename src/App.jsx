import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import QualificationsPage from "./pages/QualificationsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/skills"         element={<SkillsPage />} />
        <Route path="/projects"       element={<ProjectsPage />} />
        <Route path="/qualifications" element={<QualificationsPage />} />
        <Route path="/contact"        element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
