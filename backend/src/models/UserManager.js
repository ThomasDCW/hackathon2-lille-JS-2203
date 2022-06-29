const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "user";
}

module.exports = ItemManager;
