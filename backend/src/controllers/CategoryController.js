const models = require("../models");

class CategoryController {
  static browse = (req, res) => {
    models.category
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

module.exports = CategoryController;
