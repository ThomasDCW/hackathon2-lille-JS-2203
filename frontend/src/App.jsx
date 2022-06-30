import Login from "@pages/Login";
import Home from "@pages/Home";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "@pages/ProjectPage";
import NewProject from "@pages/NewProject";
import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/perso" element={<Profil />} />
        <Route path="/projets" element={<ProjectPage />} />
        <Route path="/newprojets" element={<NewProject />} />
      </Routes>
    </SGlobal>
  );
}

export default App;
