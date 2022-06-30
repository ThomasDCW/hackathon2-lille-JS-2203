const models = require("../models");

class SkillController {
  static browse = (req, res) => {
    models.skill
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

module.exports = SkillController;
