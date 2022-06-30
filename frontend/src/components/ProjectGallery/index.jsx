import ProjectCard from "@components/ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";
import SProjectGallery from "./style";

export default function ProjectGallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/projects`).then(({ data }) => {
      setProjects(data);
    });
  }, []);
  return (
    <SProjectGallery>
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            img={project.img}
            title={project.title}
            client={project.client}
            description={project.description}
            creationDate={project.creationDate.slice(0, 10)}
            creatorLN={project.creatorLastname}
            creatorFN={project.creatorFirstname}
            creatorPosition={project.creatorPosition}
            creatorAgency={project.creatorAgency}
            step={project.step}
          />
        );
      })}
    </SProjectGallery>
  );
}
