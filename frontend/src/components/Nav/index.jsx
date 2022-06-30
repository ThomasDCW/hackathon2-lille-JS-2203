import { Link, useNavigate } from "react-router-dom";
import SNav from "./style";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <SNav>
      <button type="button" onClick={() => navigate(-1)}>
        Précedent
      </button>
      <button type="button">
        {" "}
        <Link to="/accueil">Machine à Projet</Link>
      </button>
    </SNav>
  );
}
