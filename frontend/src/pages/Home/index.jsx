import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "@components/Header";
import Nav from "@components/Nav";
import SHome from "./style";

export default function Home() {
  const [active, setActive] = useState(true);
  const [skills, setSkills] = useState([]);
  const [steps, setSteps] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allTokens, setAllTokens] = useState([]);

  // const [projectState, setProjectState] = useState([]);
  const [querySent, setQuerySent] = useState("");
  const [formData, setFormData] = useState({
    jeton1: false,
    jeton2: false,
    jeton3: false,
    jeton4: false,
    jeton5: false,
    jeton6: false,
  });

  const handleChoiceLinks = (evt) => {
    evt.target.classList.toggle("selected");
    const key = evt.target.name;
    setFormData({ ...formData, [key]: !formData[key] });
  };

  const makeQuestSubmit = () => {
    const allTags = Object.keys(formData);
    const validTags = allTags.filter((keyForm) => formData[keyForm] === true);
    const query = validTags.join(",");
    setQuerySent(query);
    setActive(!active);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/skills`).then(({ data }) => {
      setSkills(
        data
          .sort(() => {
            return Math.random() - 0.5;
          })
          .slice(0, 15)
      );
    });
    axios.get(`http://localhost:5000/categories`).then(({ data }) => {
      setCategories(data);
    });
    axios.get(`http://localhost:5000/projectsteps`).then(({ data }) => {
      setSteps(data);
    });
  }, []);

  useEffect(() => {
    if (!skills.length) return;
    if (!categories.length) return;
    if (!steps.length) return;

    setAllTokens(
      [...skills, ...categories, ...steps].sort(() => {
        return Math.random() - 0.5;
      })
    );
  }, [skills, categories, steps]);

  return (
    <SHome>
      <Header />
      <Nav />
      <section className="contain">
        <main>
          <div className="list">
            {allTokens.map((allToken) => {
              if (
                allToken.name === "Banque" ||
                allToken.name === "Santé" ||
                allToken.name === "Environnement" ||
                allToken.name === "Industrie" ||
                allToken.name === "Agro-alimentaire" ||
                allToken.name === "Grande distribution" ||
                allToken.name === "Commerce" ||
                allToken.name === "E-commerce" ||
                allToken.name === "Culture" ||
                allToken.name === "Education" ||
                allToken.name === "Agriculture"
              ) {
                return (
                  <input
                    type="text"
                    name={allToken.name}
                    className="jetonCateg jeton"
                    value={allToken.name}
                    onClick={(event) => {
                      handleChoiceLinks(event);
                    }}
                  />
                );
              }
              if (
                allToken.name === "Idée" ||
                allToken.name === "Cadrage" ||
                allToken.name === "Réalisation" ||
                allToken.name === "Clôture"
              ) {
                return (
                  <input
                    type="text"
                    name={allToken.name}
                    className="jeton jetonStep"
                    value={allToken.name}
                    onClick={(event) => {
                      handleChoiceLinks(event);
                    }}
                  />
                );
              }

              return (
                <input
                  type="text"
                  name={allToken.name}
                  className="jeton jetonSkill"
                  value={allToken.name}
                  onClick={(event) => {
                    handleChoiceLinks(event);
                  }}
                />
              );
            })}
          </div>
        </main>
        <section className="containButton">
          <section className="opacity">
            <div className="slogan">
              <p>
                <span>Partagez</span>
                <br /> vos idées,
                <p>
                  <span>Consultez</span> <br /> les projets,
                </p>
                <p>
                  <span>co-créez</span>
                </p>
              </p>
            </div>
            <div className="buttonResults">
              <button
                type="button"
                className={`button ${active ? "" : "ok-off"} `}
                onClick={makeQuestSubmit}
              >
                OK
              </button>

              <Link to={`/projets?tags=${querySent}`}>
                <button
                  type="button"
                  className={`button ${active ? "link-off" : ""} `}
                >
                  Consultez les projets
                </button>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </SHome>
  );
}
