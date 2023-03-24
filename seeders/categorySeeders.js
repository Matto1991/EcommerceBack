const { Category } = require("../models");
const db = require("../models");

module.exports = async () => {
  const categories = [
    { name: "Living", image: "img/categories/living_cat.webp" },
    { name: "Bedroom", image: "img/categories/bedroom_cat.webp" },
    { name: "Dining", image: "img/categories/dining_cat.webp" },
    { name: "Sets", image: "img/categories/sets_cat.webp" },
  ];
  await db.Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de categories.");
};
