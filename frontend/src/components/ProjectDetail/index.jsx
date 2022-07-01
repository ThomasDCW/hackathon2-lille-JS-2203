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
      setAudio(new Audio(`http://localhost:5000/assets/descriptionProjet.mp3`));
    });
  }, []);
  const startOrPause = () => {
    if (playOn) {
      audio.pause();
      setPlayOn(false);
      setPlayOrPauseImg(playImg);
    } else {
      audio.play();
      setPlayOn(true);
      setPlayOrPauseImg(pauseImg);
    }
  };
  return (
    <SProjectDetail img={playOrPauseImg}>
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
                  <span className="stepDate">Statut du projet : </span>
                  {project.projet.name}
                </div>
              </div>
              <h1>
                {project.projet.title}{" "}
                <span className="client">( {project.projet.client} )</span>
              </h1>
              <h2>Je parle du projet :</h2>
              <button alt="play" type="button" onClick={startOrPause} />
              <h2>Les motivations :</h2>
              <p className="descProject">{project.projet.description}</p>
              <h2>Les moyens mis en oeuvre : </h2>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                dolorem rerum quas a ex quos adipisci odit cum fuga maiores, eos
                modi esse ipsam laborum dolore laboriosam molestiae voluptas
                fugiat.
              </h4>
              <h2>
                Les skills appréciés:
                <br />
                {project.skills.map((skill) => {
                  return (
                    <div>
                      <h3>{skill.name}</h3>
                    </div>
                  );
                })}
              </h2>
              <p className="descProject">{project.projet.nsp}</p>
              <p className="creator">
                Projet créé par{" "}
                <span className="spanCreator">
                  {project.projet.creatorFirstname}
                  {project.projet.creatorLastname}
                </span>
                au poste de
                <span className="spanCreator">
                  {project.projet.creatorPosition}
                </span>
                de l'agence de
                <span className="spanCreator">
                  {project.projet.creatorAgency}
                </span>
                .
                <br /> <h2>Avec la Participation de :</h2>
                <p>
                  <br />
                  {project.participants.map((participant) => {
                    return (
                      <h3>
                        {participant.firstname}
                        {participant.lastname}
                      </h3>
                    );
                  })}
                </p>
              </p>
              <div className="link">
                <Link to="/utilisateurs">Tu recherche un collaborateur ?</Link>
              </div>
            </article>
          </div>{" "}
        </>
      ) : null}
    </SProjectDetail>
  );
}
