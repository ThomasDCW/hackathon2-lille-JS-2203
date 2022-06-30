const AbstractManager = require("./AbstractManager");

const initiateToday = new Date();
const today = initiateToday.toISOString().split("T")[0];

class ProjectManager extends AbstractManager {
  static table = "project";

  findAllInfo() {
    return this.connection.query(
      `select p.id, p.title, p.description, p.creationDate, p.client, uc.firstname as creatorFirstname, uc.lastname as creatorLastname, uc.agency as creatorAgency, uc.position as creatorPosition, c.name, c.img, pl.name, group_concat(s.name) as skill, group_concat(u.id) from  ${this.table} as p LEFT JOIN participant as pa ON p.id = pa.project_id  LEFT JOIN user AS u on pa.user_id = u.id LEFT JOIN user AS uc ON uc.id=p.userCreatorId LEFT JOIN category AS c ON p.category_id = c.id LEFT JOIN projectLife AS pl ON pl.id = p.projectLife_id LEFT JOIN neededSkill as ns ON ns.project_id = p.id LEFT JOIN skill as s ON s.id = ns.skill_id GROUP BY p.id`
    );
  }

  findProject(id) {
    return this.connection.query(
      `select p.title, p.description, p.creationDate, p.client, uc.firstname as creatorFirstname, uc.lastname as creatorLastname, uc.agency as creatorAgency, uc.position as creatorPosition, c.name, c.img, pl.name from ${this.table} as p LEFT JOIN participant as pa ON p.id = pa.project_id  LEFT JOIN user AS u on pa.user_id = u.id LEFT JOIN user AS uc ON uc.id=p.userCreatorId LEFT JOIN category AS c ON p.category_id = c.id LEFT JOIN projectLife AS pl ON pl.id = p.projectLife_id LEFT JOIN neededSkill as ns ON ns.project_id = p.id LEFT JOIN skill as s ON s.id = ns.skill_id  where p.id = ? `,
      [id]
    );
  }

  findProjectSkills(id) {
    return this.connection.query(
      `select sk.id, sk.name from ${this.table} as p LEFT JOIN neededSkill as ns on p.id = ns.project_id LEFT JOIN skill as sk on sk.id = ns.skill_id where p.id = ? `,
      [id]
    );
  }

  findProjectParticipants(id) {
    return this.connection.query(
      `select us.id, us.firstname, us.lastname, us.agency, us.position FROM ${this.table} as p LEFT JOIN participant as par on par.project_id = p.id LEFT JOIN user as us on us.id=par.user_id WHERE p.id = ? `,
      [id]
    );
  }

  findSome(tags) {
    if (tags.length > 0) {
      let questM = tags.reduce((prev) => {
        return `${prev},?`;
      }, "?");
      questM = questM.substring(0, questM.length - 2);
      const sql = `select p.id, p.title, p.description, p.creationDate, p.client, uc.firstname as creatorFirstname, uc.lastname as creatorLastname, uc.agency as creatorAgency, uc.position as creatorPosition, c.name, c.img, pl.name, group_concat(s.name), group_concat(u.id) from ${this.table} AS p 
      LEFT JOIN participant as pa ON p.id = pa.project_id  
      LEFT JOIN user AS u on pa.user_id = u.id 
      LEFT JOIN user AS uc ON uc.id=p.userCreatorId 
      LEFT JOIN category AS c ON p.category_id = c.id 
      LEFT JOIN projectLife AS pl ON pl.id = p.projectLife_id 
      LEFT JOIN neededSkill as ns ON ns.project_id = p.id 
      LEFT JOIN skill as s ON s.id = ns.skill_id 
      WHERE c.name in (${questM}) OR pl.name in (${questM}) OR s.name in (${questM}) 
      GROUP BY p.id`;
      return this.connection.query(sql, tags.concat(tags).concat(tags));
    }
    return {};
  }

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title, description, img, creationDate, client, userCreatorid, projectLife_id, category_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
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
