const { Product } = require("../models");
const formidable = require("formidable");

async function featured(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        featured: true,
      },
    });
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
}

async function index(req, res) {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    return res.json(product);
  } catch (err) {
    console.log(err);
  }
}

async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img/users",
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      const { name, description, price, stock, featured, categoryId } = fields;

      const newProduct = await Product.create({
        name,
        description,
        images: files.image.newFilename,
        price,
        stock,
        featured,
        categoryId,
      });
      newProduct.save();
      return res.json(newProduct);
    });
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img/users",
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      const { name, description, price, stock, featured, categoryId } = fields;

      const editProduct = await Product.update(
        {
          name,
          description,
          images: files.image.newFilename,
          price,
          stock,
          featured,
          categoryId,
        },
        {
          where: { id: req.params.id },
        },
      );

      return res.json(editProduct);
    });
  } catch (err) {
    console.log(err);
  }
}

async function destroy(req, res) {
  const id = req.params.id;
  try {
    await Product.destroy({
      where: {
        id: id,
      },
    });
    return res.json(id);
  } catch (error) {
    console.error("Error al eliminar el producto", error);
    res.status(500).send({ message: "Error al eliminar el producto." });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  featured,
};
