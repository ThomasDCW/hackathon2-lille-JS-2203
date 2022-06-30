import Header from "@components/Header";
import { useState, useEffect } from "react";
import Result from "@components/Result";
import axios from "axios";
import { Link } from "react-router-dom";
import SHome from "./style";

export default function Home() {
  const [active, setActive] = useState(true);
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);
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
      setSkills(data);
    });
    axios.get(`http://localhost:5000/categories`).then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <SHome>
      <Header />
      <main>
        <div className="list">
          {skills.map((skill) => {
            return (
              <input
                type="text"
                name={skill.name}
                className="jeton"
                value={skill.name}
                onClick={(event) => {
                  handleChoiceLinks(event);
                }}
              />
            );
          })}
          {categories.map((categorie) => {
            return (
              <input
                type="text"
                name={categorie.name}
                className="jeton"
                value={categorie.name}
                onClick={(event) => {
                  handleChoiceLinks(event);
                }}
              />
            );
          })}
        </div>
        <div className="buttonResults">
          <button
            type="button"
            className={`button ${active ? "" : "ok-off"} `}
            onClick={makeQuestSubmit}
          >
            OK?
          </button>

          <Link to={`/projets?${querySent}`}>
            <button
              type="button"
              className={`button ${active ? "link-off" : ""} `}
            >
              Envoyez les projets
            </button>
          </Link>
        </div>
      </main>
      <Result />
    </SHome>
  );
}
