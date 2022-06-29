import Header from "@components/Header";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <Header />
      <div className="loginContainer">Accueil recherche</div>
    </SHome>
  );
}
