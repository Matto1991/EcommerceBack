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

// Display the specified resource.
async function show(req, res) {
  try {
    const name = req.params.name;
    const category = await Category.findOne({
      where: { name },
      include: { model: Product },
    });
    //condicion

    return res.json(category);
  } catch (err) {
    console.log(err);
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
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

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
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

// Remove the specified resource from storage.
async function destroy(req, res) {
  const id = req.params.id;
  try {
    const deletedCategory = await Category.destroy({
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

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
