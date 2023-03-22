const { Category } = require("../models");

module.exports = async () => {
  const categories = [
      { name:
        "bedroom",
      },
       {  name:
          "living"
        },
       {  name:
          "sets"
        },
         {name:
          "dining"
      },
  ];
  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de categories.");
};

