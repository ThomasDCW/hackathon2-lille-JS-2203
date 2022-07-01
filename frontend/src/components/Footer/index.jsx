import logo from "../../assets/logo/white.png";
import SFooter from "./style";

export default function Footer() {
  return (
    <SFooter>
      <img src={logo} alt="logo" />

      <ul>
        <li>
          <a href="https://github.com/ilalande">Juliane</a>
        </li>
        <li>
          <a href="https://github.com/camillaume">Camille</a>
        </li>
        <li>
          <a href="https://github.com/jeremyjorand">Jeremy</a>
        </li>
        <li>
          <a href="https://github.com/RomainLF">Romain</a>
        </li>
        <li>
          <a href="https://github.com/ThomasDCW">Thomas</a>
        </li>
      </ul>
      <h1>Hackhaton Wild Code School, du 29 juin 2022 au 01 juillet 2022</h1>
    </SFooter>
  );
}
