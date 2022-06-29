const AbstractManager = require("./AbstractManager");

const initiateToday = new Date();
const today = initiateToday.toISOString().split("T")[0];
class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name, description, img, creationDate, client, userCreatorid, projectLife_id, category_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.img,
        today,
        project.client,
        project.userCreatorid,
        project.projectLife_id,
        project.category_id,
      ]
    );
  }
}

module.exports = ProjectManager;
