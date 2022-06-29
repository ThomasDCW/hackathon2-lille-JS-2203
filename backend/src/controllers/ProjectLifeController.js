const models = require("../models");

class ProjectLifeController {
  static browse = (req, res) => {
    models.projectLife
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectLifeController;
