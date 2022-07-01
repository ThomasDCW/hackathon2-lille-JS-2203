const models = require("../models");

class ProjectController {
  static read = (req, res) => {
    const newId = req.params.id;
    const data = {};
    models.project.findProject(newId).then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        data.projet = rows.shift();
      }
    });
    models.project.findProjectSkills(newId).then(([rows]) => {
      const tempArr = [];
      rows.forEach((row) => {
        tempArr.push(row);
      });
      data.skills = tempArr;
    });
    models.project
      .findProjectParticipants(newId)
      .then(([rows]) => {
        const tempArr = [];
        rows.forEach((row) => {
          tempArr.push(row);
        });
        data.participants = tempArr;
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browse = (req, res) => {
    models.project
      .findAllInfo()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const project = req.body;

    // TODO validations (length, format...)

    models.project
      .insert(project)
      .then(([result]) => {
        res.status(201).send({ ...project, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectController;
