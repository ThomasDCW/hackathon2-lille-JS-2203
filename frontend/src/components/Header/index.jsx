import logo from "@assets/logo/logo.png";
import profil from "@assets/login/profil.jpg";
import Avatar from "@mui/material/Avatar";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <img className="logo" src={logo} alt="apsdidLogo" />
      <Avatar
        alt="Remy Sharp"
        src={profil}
        sx={{ width: 60, height: 60, margin: 1 }}
      />
    </SHeader>
  );
}
