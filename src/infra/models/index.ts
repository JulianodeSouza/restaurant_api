import { Sequelize } from "sequelize";
import { logConsole } from "@/utils/stringUtils";
import dotenv from "dotenv";
import RestaurantErrors from "@/api/middlewares/errors/RestaurantErrors";
dotenv.config();

export const db = new Sequelize(
  process.env.DB || "",
  process.env.DB_USER || "",
  process.env.PASSWORD_DB || "",
  {
    host: process.env.DB_HOST || "",
    dialect: "mysql",
  }
);

try {
  db.authenticate();
  logConsole("Conexão realizada com sucesso!");
} catch (e) {
  logConsole(e);
  throw new RestaurantErrors("Não foi possível conectar ao banco de dados");
}
