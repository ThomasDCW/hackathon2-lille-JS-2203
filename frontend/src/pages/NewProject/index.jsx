import Header from "@components/Header";
import AddProject from "@components/AddProject";
import SNewProject from "./style";

export default function NewProject() {
  return (
    <SNewProject>
      <Header />
      <AddProject />
    </SNewProject>
  );
}
