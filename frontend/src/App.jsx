import Login from "@pages/Login";
import Home from "@pages/Home";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "@pages/ProjectPage";
import NewProject from "@pages/NewProject";
import SearchUser from "@pages/SearchUser";
import ProjectDetailPage from "@pages/ProjectDetailPage";
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
        <Route path="/utilisateurs" element={<SearchUser />} />
        <Route path="/projets/:id" element={<ProjectDetailPage />} />
        <Route path="/projets" element={<ProjectDetailPage />} />
      </Routes>
    </SGlobal>
  );
}

export default App;
