import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import playImg from "@assets/img/play-solid.svg";
import pauseImg from "@assets/img/pause-solid.svg";
import SProjectDetail from "./style";

export default function ProjectDetail() {
  const [project, setProject] = useState([]);
  const [audio, setAudio] = useState(null);
  const [playOn, setPlayOn] = useState(false);
  const [playOrPauseImg, setPlayOrPauseImg] = useState(playImg);
  const [creatorProject, setCreatorProject] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${id}`).then(({ data }) => {
      setProject(data);
      setCreatorProject(data.projet.creationDate.slice(0, 10));
    });
  }, []);

  return (
    <SProjectDetail>
      {project.projet ? (
        <>
          <img src={`/${project.projet.img}`} alt={project.projet.img} />
          <div className="articleContainer">
            <article>
              <div className="containDateStep">
                <div className="creationDate">
                  <span className="stepDate">Date de création : </span>
                  {creatorProject}
                </div>
                <div>
                  <span className="stepDate">Status du projet : </span>
                  {project.projet.name}
                </div>
              </div>
              <h1>
                {project.projet.title}{" "}
                <span className="client">( {project.projet.client} )</span>
              </h1>
              <p>
                Pourquoi: <br />
              </p>
              <p className="descProject">{project.projet.description}</p>
              <p>Comment :</p>
              <p>
                Skills nécessaire :<br />
                {project.skills.map((skill) => {
                  return <div>{skill.name}</div>;
                })}
              </p>
              <p className="descProject">{project.projet.nsp}</p>
              <p>
                Par qui :<br />
                {project.participants.map((participant) => {
                  return (
                    <div>
                      {participant.firstname}
                      {participant.lastname}
                    </div>
                  );
                })}
              </p>
              <p className="creator">
                Projet créé par{" "}
                <span className="spanCreator">
                  {project.projet.creatorFirstname}{" "}
                  {project.projet.creatorLastname}
                </span>{" "}
                au poste de{" "}
                <span className="spanCreator">
                  {project.projet.creatorPosition}
                </span>{" "}
                de l'agence de{" "}
                <span className="spanCreator">
                  {project.projet.creatorAgency}
                </span>
                .
                <br /> Avec la Participation de :{" "}
                <span className="spanCreator">{project.projet.nup}</span>
              </p>
              <section className="listen">
                <p>Ecoute le projet :</p>
              </section>{" "}
              <Link to="/utilisateurs">Tu recherche un collaborateur ?</Link>
            </article>
          </div>{" "}
        </>
      ) : null}
    </SProjectDetail>
  );
}
