const { Product } = require("../models");
const db = require("../models");

module.exports = async () => {
  const products = [
    //---------------------------------------------Living------------------------------------------------------
    {
      name: "The Leonard Sofa",
      description:
        "The sculptural curves of The Leonard Sofa offer refined elegance and luxurious comfort. Slipcovered in linen for a relaxed, textural feel.",
      images: ["img/Living/TheLeonardSofa.png"],
      price: 2925,
      stock: 20,
      featured: true,
      categoryId: 1,
    },
    {
      name: "The Muir Sofa",
      description:
        "Artisanal woodworking meets expertly tailored, high-end comfort in The Muir Sofa. Its striking silhouette with built-in side table form a mixed material work of art.",
      images: ["img/Living/TheMuirSofa.png"],
      price: 4100,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "The Leroy Chair",
      description:
        "A stunning statement piece inspired by Danish modern design. We love Leroy's curves from every angle.",
      images: ["img/Living/TheLeroyChair.webp"],
      price: 1575,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "The Vestry Nesting Tables",
      description:
        " Handcrafted of solid oak, The Vestry’s organic shape and soft curvature display an expansive statement of natural materiality. Designed to artfully nest together or stand alone in graceful proportion.",
      images: ["img/Living/TheVestryNestingTable.png"],
      price: 1275,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    {
      name: "The Franklin Bench",
      description:
        "Tailored in rich texture with a versatile design, The Franklin is beautifully timeless and effortlessly comfortable. Slipcovered in linen for a casual yet elegant addition to any room.",
      images: ["img/Living/TheFranklinBench.png"],
      price: 1775,
      stock: 20,
      featured: false,
      categoryId: 1,
    },
    //-------------------------------------- Bedroom
    {
      name: "The Smith Bed",
      description:
        "With marked curvature and oversized stature, The Smith references the bold sophistication of 1970s Italian design. Sumptuous lines and a sheltering headboard embrace, accentuated by a solid wood plinth base that gives its low profile a floating effect.",
      images: ["img/Bedroom/smithBed.png"],
      price: 3800,
      stock: 20,
      featured: true,
      categoryId: 2,
    },
    {
      name: "The Varick Chair and a Half",
      description:
        "Bold proportions and comfort-driven curvature make The Varick a contemporary statement fit for everyday luxury. Its oversized arms and low-slung profile lend a relaxed, casual feel.",
      images: ["img/Bedroom/VarickChair.png"],
      price: 2150,
      stock: 20,
      featured: false,
      categoryId: 2,
    },
    {
      name: "The Thompson Canopy Bed",
      description:
        "An organic, refined silhouette that allows natural materiality and subtle tailoring to shine. The Thompson makes an elegant statement in any Bedroom.",
      images: ["img/Bedroom/ThompsonCanopyBed.png"],
      price: 3750,
      stock: 20,
      featured: false,
      categoryId: 2,
    },
    {
      name: "The Bowery Coffe Table",
      description:
        "Modern lines meet plush comfort in this beautifully tailored coffee table ottoman. With a movable solid ash table and subtle detailing throughout, The Bowery is a study in elegant yet functional design.",
      images: ["img/Bedroom/BoweryCoffeeTable.png"],
      price: 1675,
      stock: 20,
      featured: false,
      categoryId: 2,
    },

    {
      name: "The Perry Chair",
      description:
        "Modern lines meet plush comfort in this be table and subtle detailing throughout, The Bowery is study in elegant yet functional design.",
      images: ["img/Bedroom/perryChair.png"],
      price: 1675,
      stock: 20,
      featured: false,
      categoryId: 2,
    },
    //------------------------------------ Dining
    {
      name: "The Bedford Dining Table",
      description:
        "Stunning in its simplicity, The Bedford's subtle curves and timeless silhouette create a statement of elegance. Expertly crafted of solid ash wood and finished with exquisite artisanship.",
      images: ["img/Dining/TheBedfordDininigTable.png"],
      price: 2450,
      stock: 20,
      featured: true,
      categoryId: 3,
    },
    {
      name: "The Jane Dining Chair",
      description:
        "Playful contours and a bold, mixed material aesthetic give The Jane a stylish form that's designed for lingering. Its elegantly curved back and refined curved legs add sculptural appeal.",
      images: ["img/Dining/TheJaneDiningChair.png"],
      price: 745,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "The Delancey Stool",
      description:
        "Mixed materiality and a beautifully curved frame give The Delancey a handcrafted design inspired by midcentury forms. Expertly crafted from solid ash with a roomy, plush seat for elevated comfort.",
      images: ["img/Dining/TheDelanceyStool.png"],
      price: 865,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "The Carlisle Dining Table",
      description:
        "Defined by graphic angles and a striking form, The Carlisle embodies a modern yet timeless design. Each piece is expertly crafted of solid ash, with its striking form accentuated by a two-toned finish and delicate brass detailing.",
      images: ["img/Dining/TheCarlisleDiningTable.png"],
      price: 3450,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    {
      name: "The Reade Console Table",
      description:
        "A delicate balance of commanding proportions, The Reade's handcrafted column legs and intricately designed tabletop create an unforgettable sculptural statement. Expertly crafted of solid ash wood and finished with exquisite artisanship.",
      images: ["img/Dining/TheReadeConsoleTable.png"],
      price: 2475,
      stock: 20,
      featured: false,
      categoryId: 3,
    },
    // ------------------------ Sets --------------------------
    {
      name: "The Morro Nesting Table",
      description:
        "Classic silhouettes reimagined in a serene yet playful palette, creating softness in both texture and tone for a harmonious retreat of subtle coastal color.",
      images: ["img/Sets/TheMorroNestingtables.png"],
      price: 2950,
      stock: 20,
      featured: true,
      categoryId: 4,
    },
    {
      name: "Set Morro Table & Chain",
      description:
        "An artful marriage of sculptural forms and dimensional texture create a collection of showstopping pieces designed to revel in.",
      images: ["img/Sets/SetMorroTable&Chains.png"],
      price: 4735,
      stock: 20,
      featured: false,
      categoryId: 4,
    },
    {
      name: "Set Reyes Table & Chain",
      description:
        "A collection defined by playful curves and sculptural proportions—for a bold, contemporary design crafted to be high in style and comfort.",
      images: ["img/Sets/SetReyesTable&Chains.png"],
      price: 7795,
      stock: 20,
      featured: false,
      categoryId: 4,
    },
    {
      name: "Set Coffee Living",
      description:
        "Rooted in sculpted forms, luxurious texture, and a reverence for craftsmanship, each piece is definitively modern, yet an enduring classic.",
      images: ["img/Sets/CoffeeLiving.png"],
      price: 6200,
      stock: 20,
      featured: false,
      categoryId: 4,
    },
    {
      name: "The Allen Dining",
      description:
        "Inspired by the timeworn hues of seaside elements, each piece displays natural textures in elegant tones, creating a sense of ease that mirrors a tranquil retreat.",
      images: ["img/Sets/AllenDining.png"],
      price: 9800,
      stock: 20,
      featured: false,
      categoryId: 4,
    },
  ];

  await db.Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de products.");
};
