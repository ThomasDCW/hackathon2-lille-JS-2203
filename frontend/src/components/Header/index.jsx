import logo from "@assets/logo/logo.png";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <img src={logo} alt="apsdidLogo" />
    </SHeader>
  );
}
