const db = require("../models");

async function reset(req, res) {
  try {
    await db.sequelize.sync({ force: true });
    console.log("[Database] ¡Los datos de prueba fueron insertados!");

    await require("../seeders/categorySeeders")();
    await require("../seeders/productSeeder")();
    await require("../seeders/userSeeder")();
    await require("../seeders/adminSeeder")();

    res.json({ message: "Database reset complete!" });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { reset };
