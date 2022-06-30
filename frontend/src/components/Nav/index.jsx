import { Link } from "react-router-dom";
import SNav from "./style";

export default function Nav() {
  return (
    <SNav>
      <Link to="/accueil">La Machine à Projet</Link>
      <Link to="/toutlesprojets">Consultez les projets</Link>{" "}
      <Link to="/utilisateurs">Cherchez un profil</Link>{" "}
      <Link to="/nouveauprojet">Déposez un projet</Link>
    </SNav>
  );
}
