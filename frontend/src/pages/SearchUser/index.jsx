/* eslint-disable */
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@components/Header";
import Nav from "@components/Nav";
import mail from "@assets/logo/mail.png";
import picture from "@assets/user/user.png";
import SSearchUser from "./style";

export default function SearchUser() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  return (
    <SSearchUser>
      <Header />
      <Nav />
      <div className="searchbar">
        <input
          type="text"
          placeholder="Tapez une compétence"
          onChange={handleSearch}
        />
      </div>
      <div className="userCardContainer">
        {users
          .filter((user) => {
            return user.skills.includes(search);
          })
          .map((user) => {
            return (
              <div className="userCard">
                <img className="picture" src={picture} />
                <h1>
                  {user.firstname}, {user.lastname}
                </h1>
                <h2>de {user.agency}</h2>
                <h3>
                  {user.skills.split(",").map((skill, idx) => {
                    return (
                      <p
                        key={idx}
                        className={
                          skill.includes(search) ? "useful" : "useless"
                        }
                      >
                        {skill}
                      </p>
                    );
                  })}
                </h3>
                <a href="">
                  <img className="mail" src={mail} alt="pic" />
                </a>
              </div>
            );
          })}
      </div>
    </SSearchUser>
  );
}
