const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "skill";
}

module.exports = ItemManager;
