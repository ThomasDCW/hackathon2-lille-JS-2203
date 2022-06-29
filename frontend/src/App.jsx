import Login from "@pages/Login";
import Home from "@pages/Home";
import Form from "@pages/Form";
import Profil from "@pages/Profil";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/resultat/:textEntered" element={<Form />} />
        <Route path="/perso" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
