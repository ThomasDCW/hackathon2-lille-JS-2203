const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  findAllInfo() {
    return this.connection.query(
      `SELECT  u.*, GROUP_CONCAT(s.id), GROUP_CONCAT(s.name) FROM ${UserManager.table} as u LEFT JOIN acquieredSkill AS ask ON u.id = ask.user_id LEFT JOIN skill as s ON ask.skill_id = s.id GROUP BY u.id`
    );
  }
}

module.exports = UserManager;
