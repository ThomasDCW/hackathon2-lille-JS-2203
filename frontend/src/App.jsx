import Login from "@pages/Login";
import Home from "@pages/Home";
import Form from "@pages/Form";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "@pages/ProjectPage";
import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/resultat/:textEntered" element={<Form />} />
        <Route path="/perso" element={<Profil />} />
        <Route path="/projets" element={<ProjectPage />} />
      </Routes>
    </SGlobal>
  );
}

export default App;
