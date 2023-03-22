const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "The Leonard Sofa",
      description:
        "The sculptural curves of The Leonard Sofa offer refined elegance and luxurious comfort. Slipcovered in linen for a relaxed, textural feel.",
      images: [],
      price: 2925,
      stock: 20,
      featured: true,
      category: 1,
    },
    {
      name: "The Muir Sofa",
      description:
        "Artisanal woodworking meets expertly tailored, high-end comfort in The Muir Sofa. Its striking silhouette with built-in side table form a mixed material work of art.",
      images: [],
      price: 4100,
      stock: 20,
      featured: false,
      category: 1,
    },
    {
      name: "The Leroy Chair",
      description:
        "A stunning statement piece inspired by Danish modern design. We love Leroy's curves from every angle.",
      images: [],
      price: 1575,
      stock: 20,
      featured: false,
      category: 1,
    },
    {
      name: "The Vestry Nesting Tables",
      description:
        " Handcrafted of solid oak, The Vestry’s organic shape and soft curvature display an expansive statement of natural materiality. Designed to artfully nest together or stand alone in graceful proportion.",
      images: [],
      price: 1275,
      stock: 20,
      featured: false,
      category: 1,
    },
    {
      name: "The Franklin Bench",
      description:
        "Tailored in rich texture with a versatile design, The Franklin is beautifully timeless and effortlessly comfortable. Slipcovered in linen for a casual yet elegant addition to any room.",
      images: [],
      price: 1775,
      stock: 20,
      featured: false,
      category: 1,
    },
    //--------------------------------------
    {
      name: "The Smith Bed",
      description:
        "With marked curvature and oversized stature, The Smith references the bold sophistication of 1970s Italian design. Sumptuous lines and a sheltering headboard embrace, accentuated by a solid wood plinth base that gives its low profile a floating effect.",
      images: [],
      price: 3800,
      stock: 20,
      featured: true,
      category: 1,
    },

    //------------------------------------ Dining
    {
      name: "The Bedford Dining Table",
      description:
        "Stunning in its simplicity, The Bedford's subtle curves and timeless silhouette create a statement of elegance. Expertly crafted of solid ash wood and finished with exquisite artisanship.",
      images: [],
      price: 2450,
      stock: 20,
      featured: true,
      category: 1,
    },
  ];

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de products.");
};
