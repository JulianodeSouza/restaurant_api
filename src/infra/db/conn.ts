import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const db = new Sequelize(
  process.env.DB || "",
  process.env.DB_USER || "",
  process.env.PASSWORD_DB || "",
  {
    host: process.env.DB_HOST || "",
    dialect: (process.env.DB_DIALECT as Dialect) || undefined,
  }
);

try {
  // db.authenticate();
  console.log("Conexão realizada com sucesso!");
} catch (e) {
  console.log(e);
  throw new Error("Não foi possível conectar ao banco de dados");
}
