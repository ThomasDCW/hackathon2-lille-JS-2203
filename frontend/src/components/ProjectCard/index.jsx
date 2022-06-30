import { Link } from "react-router-dom";
import propTypes from "prop-types";
import SProjectCard from "./style";

export default function ProjectCard({
  id,
  img,
  title,
  client,
  description,
  creationDate,
  step,
  creatorLN,
  creatorFN,
  creatorPosition,
  creatorAgency,
}) {
  return (
    <SProjectCard>
      <img src={img} alt="" />
      <div className="articleContainer">
        <article>
          <div className="containDateStep">
            <div className="creationDate">
              <span className="stepDate">Date de création : </span>
              {creationDate}
            </div>
            <div>
              <span className="stepDate">Status du projet : </span>
              {step}
            </div>
          </div>
          <h1>
            {title} <span className="client">( {client} )</span>
          </h1>
          <p>{description}</p>
          <p className="creator">
            Projet créé par{" "}
            <span className="spanCreator">
              {creatorFN} {creatorLN}
            </span>{" "}
            au poste de <span className="spanCreator">{creatorPosition}</span>{" "}
            de l'agence de <span className="spanCreator">{creatorAgency}</span>.
          </p>
          <div>
            <Link to={`/projets/${id}`}>Details du projet</Link>
          </div>
        </article>
      </div>
    </SProjectCard>
  );
}
ProjectCard.propTypes = {
  id: propTypes.string.isRequired,
  creationDate: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  client: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  creatorLN: propTypes.string.isRequired,
  creatorFN: propTypes.string.isRequired,
  creatorPosition: propTypes.string.isRequired,
  creatorAgency: propTypes.string.isRequired,
  step: propTypes.string.isRequired,
};
