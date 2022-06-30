import Header from "@components/Header";
import { useState, useEffect } from "react";
import Result from "@components/Result";
import axios from "axios";
import SHome from "./style";

export default function Home() {
  const [active, setActive] = useState(true);
  const [skills, setSkills] = useState([]);
  const [steps, setSteps] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allTokens, setAllTokens] = useState([]);

  // const [projectState, setProjectState] = useState([]);
  const makeQuestSubmit = () => {
    // const allTags = Object.keys(formData); // Object.keys() gets all keys of an object and puts it into an array
    // const validTags = allTags.filter((keyForm) => formData[keyForm] === true);
    // const subQueries = validTags.map((tag) => {
    //   const smiley = smileys.find((smi) => smi.key === tag);
    //   const subQuery = smiley.query;
    //   return subQuery;
    // });
    // const query = subQueries.join("&");
    // setQuerySent(query);
    setActive(!active);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/skills`).then(({ data }) => {
      setSkills(
        data
          .sort(() => {
            return Math.random() - 0.5;
          })
          .slice(0, 10)
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
              return <div className="jetonCateg">{allToken.name}</div>;
            }
            if (
              allToken.name === "idée" ||
              allToken.name === "cadrage" ||
              allToken.name === "réalisation" ||
              allToken.name === "clôture"
            ) {
              return <div className="jetonStep">{allToken.name}</div>;
            }

            return <div className="jetonSkill">{allToken.name}</div>;
          })}
        </div>
        <div className="buttonResults">
          <button
            type="button"
            className={`button ${active ? "" : "ok-off"} `}
            onClick={makeQuestSubmit}
          >
            Are you ok?
          </button>

          {/* <Link to={`/suggestion/results?${querySent}`}> */}
          <button
            type="button"
            className={`button ${active ? "link-off" : ""} `}
          >
            Show your result
          </button>
          {/* </Link> */}
        </div>
      </main>
      <Result />
    </SHome>
  );
}
