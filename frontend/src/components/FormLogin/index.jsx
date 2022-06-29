import { Link } from "react-router-dom";
import SFormLogin from "./style";

export default function FormLogin() {
  return (
    <SFormLogin>
      <h1>Machine à Projet</h1>
      <form>
        <h2>Se connecter</h2>
        <input type="text" placeholder="Identifiant" />
        <input type="password" placeholder="Mot de passe" />
        <div className="textContainer">
          <p>Se souvenir de moi</p>
          <p>Mot de passe oublié ?</p>
        </div>
      </form>
      <div>
        <Link to="/">Connexion</Link>
      </div>
      <div className="textContainer">
        <p>Pas encore de compte ?</p>
        <p>
          <span>Créer un compte</span>
        </p>
      </div>
    </SFormLogin>
  );
}
