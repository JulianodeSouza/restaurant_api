const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

try {
  db.authenticate();
  console.log("Conexão realizada com sucesso!");
} catch (e) {
  console.log(e);
  throw new Error("Não foi possível conectar ao banco de dados");
}

module.exports = db;
