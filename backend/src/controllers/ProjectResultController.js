const models = require("../models");

class ProjectResultController {
  static browse = (req, res) => {
    const tags = req.query.tags.split(",");
    models.project
      .findSome(tags)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectResultController;
