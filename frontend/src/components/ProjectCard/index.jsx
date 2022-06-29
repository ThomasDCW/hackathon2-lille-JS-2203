import project from "@assets/project/project.png";
import SProjectCard from "./style";

export default function ProjectCard() {
  return (
    <SProjectCard>
      <img src={project} alt="" />
      <div className="articleContainer">
        <article>
          <h1>Nom du projet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            cumque dolore officia qui quam, vitae magnam deleniti rem ea
            cupiditate exercitationem consectetur alias quaerat! Tempore odio
            possimus obcaecati nesciunt repellat.
          </p>
        </article>
      </div>
    </SProjectCard>
  );
}
