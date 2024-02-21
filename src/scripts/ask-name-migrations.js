const readSync = require("readline-sync");
const { execSync } = require("child_process");

const migrationName = readSync.question("Write migration name:");

execSync(`npx sequelize-cli migration:generate --name ${migrationName}`);
