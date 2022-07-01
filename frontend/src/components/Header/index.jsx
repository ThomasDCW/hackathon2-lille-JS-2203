import logo from "@assets/logo/logo.png";
import profil from "@assets/user/user.png";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <img className="logo" src={logo} alt="apsdidLogo" />
      <Link to="/perso">
        <Avatar
          alt="Remy Sharp"
          src={profil}
          sx={{ width: 60, height: 60, margin: 1 }}
        />
      </Link>
    </SHeader>
  );
}
