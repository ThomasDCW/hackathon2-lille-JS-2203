import Header from "@components/Header";
import Nav from "@components/Nav";
import SSearchUser from "./style";

export default function SearchUser() {
  return (
    <SSearchUser>
      <Header />
      <Nav />
      <div className="searchbar">
        <input type="text" placeholder="Chechez un profil" />
      </div>
    </SSearchUser>
  );
}
