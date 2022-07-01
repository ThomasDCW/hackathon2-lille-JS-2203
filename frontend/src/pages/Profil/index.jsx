import Header from "@components/Header";
import imgLoca from "@assets/login/localisateur.png";
import axios from "axios";
import { useState, useEffect } from "react";
import Label from "@components/Label";
import Nav from "@components/Nav";
import profil from "@assets/user/user.png";
import SProfil from "./style";

export default function Profil() {
  const [dataSkills, setDataSkills] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/Skills`).then(({ data }) => {
      setDataSkills(data);
    });
  }, []);

  const [choice, setChoice] = useState([]);

  return (
    <SProfil>
      <Header />
      <Nav />
      <section className="main">
        <div className="imgPosition">
          <img alt="imgProfile" src={profil} />
        </div>
        <div className="line"> </div>
        <section className="infoP">
          {" "}
          <div className="firstname">Romain</div>{" "}
          <div className="lastname">Le Floch</div>
        </section>
        <section className="role">
          <p>Manager</p>
        </section>
        <section className="city">
          {" "}
          <img alt="localisation" src={imgLoca} /> <p>Nantes</p>
        </section>
        <div className="comp">
          <button
            type="button"
            value={choice}
            onClick={(e) => {
              setChoice(e.target.value);
            }}
          >
            Mes competences
          </button>
          <button
            type="button"
            value="B"
            onClick={(e) => {
              setChoice(e.target.value);
            }}
          >
            {" "}
            Compétences que je veux
          </button>
          <button
            type="button"
            value="C"
            onClick={(e) => {
              setChoice(e.target.value);
            }}
          >
            {" "}
            Ce que je ne veux plus faire{" "}
          </button>
        </div>
        <section className="mainCor" />

        <div className="comp">Ajouter des competences:</div>

        <section className="mainCor">
          {dataSkills.map((d) => (
            <Label name={d.name} key={d.name} />
          ))}
        </section>
      </section>
    </SProfil>
  );
}
