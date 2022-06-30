import ProjectCard from "@components/ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@components/Header";
import Nav from "@components/Nav";
import SAllProjects from "./style";

export default function AllProjects() {
  const [allTheProjects, setAllTheProjects] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/projects`).then(({ data }) => {
      setAllTheProjects(data);
    });
  }, []);

  return (
    <SAllProjects>
      <Header />
      <Nav />
      <div className="allprojects">
        {allTheProjects.map((project) => {
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
      </div>
    </SAllProjects>
  );
}
