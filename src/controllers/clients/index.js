const db = require("../../db/conn");
const { QueryTypes } = require("sequelize");

class Clients {
  async listClients() {
    const sql = `select * from client c`;

    const clients = await db.query(sql, {
      type: QueryTypes.SELECT,
    });

    return clients;
  }
}

module.exports = Clients;
