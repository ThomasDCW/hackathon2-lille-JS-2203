import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
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
        toast.success(
          "Félicitations, vous avez alimenté la machine à projets!",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      })
      .catch(() => {
        toast.error("Oups, réessayez!");
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
            <option value>-- Statut du projet --</option>
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
          <div id="audio">
            <p id="texte">Déposez votre présentation ici</p>
          </div>
          <input type="submit" className="bouton" value="C'est parti" />
        </>
      ) : null}
    </SAddProject>
  );
}
