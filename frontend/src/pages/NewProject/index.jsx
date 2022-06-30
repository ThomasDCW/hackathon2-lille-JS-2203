import Header from "@components/Header";
import AddProject from "@components/AddProject";
import Nav from "@components/Nav";
import SNewProject from "./style";

export default function NewProject() {
  return (
    <SNewProject>
      <Header />
      <Nav />
      <AddProject />
    </SNewProject>
  );
}
