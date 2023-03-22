const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Sofa",
      description: "loremasjhausdhiuashkdgyaskjgfdasd",
      images: [],
      stock: 5,
      featured: true,
      slug: "",
      cateogry: "",
    },
    {
      name: "Sofa",
      description: "loremasjhausdhiuashkdgyaskjgfdasd",
      images: [],
      stock: 5,
      featured: true,
      slug: "",
      cateogry: "",
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de products.");
};
