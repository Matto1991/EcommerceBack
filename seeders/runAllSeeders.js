//  node seeders/runAllSeeders.js
//  npm run seeders

require("dotenv").config();

async function runAllSeeders() {
  await require("./categorySeeders")();
  await require("./productSeeder")();
  await require("./userSeeder")();
  await require("./adminSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
