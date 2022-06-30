import Header from "@components/Header";
import ProjectDetail from "@components/ProjectDetail";
import Nav from "@components/Nav";
import SProjectDetailPage from "./style";

export default function ProjectDetailPage() {
  return (
    <SProjectDetailPage>
      <Header />
      <Nav />
      <ProjectDetail />
    </SProjectDetailPage>
  );
}
