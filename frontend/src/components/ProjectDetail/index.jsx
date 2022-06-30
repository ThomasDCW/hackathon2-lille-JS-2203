import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SProjectDetail from "./style";

export default function ProjectDetail() {
  const [project, setProject] = useState([]);
  const [creatorProject, setCreatorProject] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${id}`).then(({ data }) => {
      setProject(data);
      setCreatorProject(data.creationDate.slice(0, 5));
    });
  }, []);

  return (
    <SProjectDetail>
      <img src={`/${project.img}`} alt={project.img} />
      <div className="articleContainer">
        <article>
          <div className="containDateStep">
            <div className="creationDate">
              <span className="stepDate">Date de création : </span>
              {creatorProject}
            </div>
            <div>
              <span className="stepDate">Status du projet : </span>
              {project.name}
            </div>
          </div>
          <h1>
            {project.title} <span className="client">( {project.client} )</span>
          </h1>
          <p>
            Pourquoi: <br />
          </p>
          <p className="descProject">{project.description}</p>
          <p>Comment :</p>
          <p>
            Skills nécessaire :<br />
          </p>
          <p className="descProject">{project.nsp}</p>
          <p>
            Par qui :<br />
          </p>
          <p className="creator">
            Projet créé par{" "}
            <span className="spanCreator">
              {project.creatorFirstname} {project.creatorLastname}
            </span>{" "}
            au poste de{" "}
            <span className="spanCreator">{project.creatorPosition}</span> de
            l'agence de{" "}
            <span className="spanCreator">{project.creatorAgency}</span>.<br />{" "}
            Avec la Participation de :{" "}
            <span className="spanCreator">{project.nup}</span>
          </p>
          <section className="listen">
            <p>Ecoute le projet :</p>
          </section>{" "}
          <Link to="/utilisateurs">Tu recherche un collaborateur ?</Link>
        </article>
      </div>
    </SProjectDetail>
  );
}
