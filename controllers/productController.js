const { Product } = require("../models");

// Display a listing of the resource.
async function featured(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        featured: 1,
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
  const id = req.params.id;
  const product = await Product.findByPk(id);
  return res.json(product);
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const { name, description, images, price, stock, featured } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      images,
      price,
      stock,
      featured,
    });

    newProduct.save();

    return res.json(newProduct);
  } catch (err) {
    console.log(err);
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const { name, description, images, price, stock, featured } = req.body;

    const productId = req.params.id;
    const editProduct = await Product.update(
      {
        name,
        description,
        images,
        price,
        stock,
        featured,
      },
      { where: { id: productId } },
    );

    return res.json(editProduct);
  } catch (err) {
    console.log(err);
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  console.log(req.params.id);
  const id = req.params.id;
  try {
    const deletedProduct = await Product.destroy({
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

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  featured,
};
