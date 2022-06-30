import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import playImg from "@assets/img/play-solid.svg";
import pauseImg from "@assets/img/pause-solid.svg";
import SProjectDetail from "./style";

export default function ProjectDetail() {
  const [project, setProject] = useState([]);
  const [audio, setAudio] = useState(null);
  const [playOn, setPlayOn] = useState(false);
  const [playOrPauseImg, setPlayOrPauseImg] = useState(playImg);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${id}`).then(({ data }) => {
      setProject(data);
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
      <img src={`/${project.img}`} alt={project.img} />
      <div className="articleContainer">
        <article>
          <div className="containDateStep">
            <div className="creationDate">
              <span className="stepDate">Date de création : </span>
              {project.creationDate}
            </div>
            <div>
              <span className="stepDate">Status du projet : </span>
              {project.step}
            </div>
          </div>
          <h1>
            {project.title} <span className="client">( {project.client} )</span>
          </h1>
          <p>{project.description}</p>

          <button alt="play" type="button" onClick={startOrPause} />
          <p className="creator">
            Projet créé par{" "}
            <span className="spanCreator">
              {project.creatorFN} {project.creatorLN}
            </span>{" "}
            au poste de{" "}
            <span className="spanCreator">{project.creatorPosition}</span> de
            l'agence de{" "}
            <span className="spanCreator">{project.creatorAgency}</span>.
          </p>
        </article>
      </div>
    </SProjectDetail>
  );
}
