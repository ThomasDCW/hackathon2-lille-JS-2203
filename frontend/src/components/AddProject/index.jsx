import axios from "axios";
import { useState, useEffect } from "react";
import SAddProject from "./style";

export default function AddProject() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    client: "",
    userCreatorid: 4,
    projectLife_id: "",
    category_id: "",
  });

  const [categories, setCategories] = useState([]);
  const [projectSteps, setProjectSteps] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then(({ data }) => {
      setCategories(data);
    });
    axios.get("http://localhost:5000/projectsteps").then(({ data }) => {
      setProjectSteps(data);
    });
  }, []);

  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/projects`, formData)
      .then(() => {
        return <div className="success">Votre projet a été créé</div>;
      });
  };

  return (
    <SAddProject action="" onSubmit={hSubmit}>
      {projectSteps && categories ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="Nom du projet"
            value={formData.name}
            onChange={hChange}
          />
          <textarea
            rows={5}
            name="description"
            placeholder="Description du projet"
            value={formData.description}
            onChange={hChange}
          />
          <input
            type="text"
            name="client"
            placeholder="client"
            value={formData.client}
            onChange={hChange}
          />
          <select name="projectLife_id" onChange={hChange}>
            <option value>-- Stade du projet --</option>
            {projectSteps.map((project) => (
              <option value={project.id} key={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          <select name="category_id" onChange={hChange}>
            <option value>-- Secteur --</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="submit"
            className="bouton"
            value="Créer un nouveau projet"
          />
        </>
      ) : null}
    </SAddProject>
  );
}
