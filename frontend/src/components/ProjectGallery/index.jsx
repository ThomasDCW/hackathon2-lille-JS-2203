import ProjectCard from "@components/ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SProjectGallery from "./style";

export default function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const request = searchParams.toString();
    axios
      .get(`http://localhost:5000/projectresults?${request}`)
      .then(({ data }) => {
        setProjects(data);
      });
  }, []);

  return (
    <SProjectGallery>
      {projects.map((project) => {
        return (
          <ProjectCard
            id={project.id}
            img={project.img}
            title={project.title}
            client={project.client}
            description={project.description}
            creationDate={project.creationDate.slice(0, 10)}
            creatorLN={project.creatorLastname}
            creatorFN={project.creatorFirstname}
            creatorPosition={project.creatorPosition}
            creatorAgency={project.creatorAgency}
            step={project.name}
          />
        );
      })}
    </SProjectGallery>
  );
}
