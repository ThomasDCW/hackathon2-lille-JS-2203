import Header from "@components/Header";
import { useState } from "react";
import Result from "@components/Result";
import SHome from "./style";

export default function Home() {
  const [active, setActive] = useState(true);
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
  return (
    <SHome>
      <Header />
      <main>
        Main contener
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
