import Login from "@pages/Login";
import Home from "@pages/Home";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "@pages/ProjectPage";
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
        <Route path="/utilisateurs" element={<SearchUser />} />
        <Route path="/projets/:id" element={<ProjectDetailPage />} />
      </Routes>
    </SGlobal>
  );
}

export default App;
