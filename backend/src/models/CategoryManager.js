const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  static table = "category";
}

module.exports = CategoryManager;
