require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: true,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
};
