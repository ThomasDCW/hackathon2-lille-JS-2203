import Header from "@components/Header";
import { useState, useEffect } from "react";
import Result from "@components/Result";
import axios from "axios";
import SHome from "./style";

export default function Home() {
  const [active, setActive] = useState(true);
  const [setSkills] = useState([]);
  const [categories, setCategories] = useState([]);
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
      setSkills(data);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/categories`).then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <SHome>
      <Header />
      <main>
        <div className="list">
          {categories.map((categorie) => {
            return <div className="jeton">{categorie.name}</div>;
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
