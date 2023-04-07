const { Order, Product } = require("../models");

async function index(req, res) {
  try {
    const orders = await Order.findAll();
    return res.json(orders);
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.auth.id,
      },
    });

    return res.json(orders);
  } catch (err) {
    console.log(err);
  }
}

async function showDetails (req, res) {
  try {
    const orders = await Order.findByPk(req.params.id, {
      where: {
        userId: req.auth.id
      }
    })
    return res.json(orders)
  } catch (error) {
    console.log(error)
  }
}

async function store(req, res) {
  try {
    const userId = req.auth.id;
    const { products, details } = req.body;

    //Actualizo lo stock segund los productos que vienen desde el body
    for (const product of products) {
      const { id, quantity } = product;
      const foundProduct = await Product.findByPk(id);
      if (!foundProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      const newStock = foundProduct.stock - quantity;
      if (newStock < 0) {
        return res.status(400).json({ error: "Insufficient stock" });
      }
      foundProduct.stock = newStock;
      await foundProduct.save();
    }

    //se crea la orden
    const newOrder = await Order.create({
      userId,
      products,
      details,
    });

    return res.json(newOrder);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  index,
  show,
  store,
  showDetails
};
