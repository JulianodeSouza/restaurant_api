import * as readSync from "readline-sync";
import { execSync } from "child_process";

const migrationName = readSync.question("Write migration name:");

execSync(`npx sequelize-cli migration:generate --name ${migrationName}`);
