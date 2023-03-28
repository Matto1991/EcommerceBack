const { Category } = require("../models");
const db = require("../models");

module.exports = async () => {
  const categories = [
    { name: "Living", image: "img/Categories/living_cat.webp" },
    { name: "Bedroom", image: "img/Categories/bedroom_cat.webp" },
    { name: "Dining", image: "img/Categories/dining_cat.webp" },
    { name: "Sets", image: "img/Categories/sets_cat.webp" },
  ];
  await db.Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de categories.");
};
