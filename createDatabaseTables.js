//  node createDatabaseTables.js
//  npm run tables

const db = require("./models");

async function createDatabaseTables() {
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
}

createDatabaseTables();
