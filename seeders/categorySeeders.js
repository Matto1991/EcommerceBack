const { Category } = require("../models");
const db = require("../models");

module.exports = async () => {
  const categories = [
    { name: "Living" },
    { name: "Bedroom", },
    { name: "Dining" },
    { name: "Sets" },
  ];
  await db.Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de categories.");
};
