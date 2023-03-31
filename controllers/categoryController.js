const { Category, Product } = require("../models");
const formidable = require("formidable");

async function index(req, res) {
  try {
    const categories = await Category.findAll();
    return res.json(categories);
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  try {
    const name = req.params.name;
    const category = await Category.findOne({
      where: { name },
      include: { model: Product },
    });

    return res.json(category);
  } catch (err) {
    console.log(err);
  }
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/users",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const { name } = fields;

    await Category.create({
      name,

      image: files.image.newFilename,
    });
    return res.end();
  });
}

async function update(req, res) {
  const { id } = req.params;
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/users",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const { name } = fields;

    await Category.update({ name, image: files.image.newFilename }, { where: { id } });
    const updatedCategory = await Category.findByPk(id);
    res.status(200).json({ category: updatedCategory });
  });
}

async function destroy(req, res) {
  const id = req.params.id;
  try {
    await Category.destroy({
      where: {
        id: id,
      },
    });
    return res.json(id);
  } catch (error) {
    console.error("Error al eliminar el usuario", error);
    res.status(500).send({ message: "Error al eliminar el producto." });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
