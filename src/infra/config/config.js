require("dotenv").config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.PASSWORD_DB,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: "mysql",
};
