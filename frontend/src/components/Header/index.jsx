import logo from "@assets/logo/logo.png";
import profilPerso from "@assets/profil.jpg";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <img className="logo" src={logo} alt="apsdidLogo" />
      <h1>Machine à projet</h1>
      <img className="profil" src={profilPerso} alt="profil perso" />
    </SHeader>
  );
}
