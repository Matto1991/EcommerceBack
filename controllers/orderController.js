const { Order } = require("../models");

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
    const order = await Order.findOne({
      where: {
        id: req.auth.id,
      },
    });

    return res.json(order);
  } catch (err) {
    console.log(err);
  }
}

async function store(req, res) {
  try {
    const userId = req.auth.id;
    const { products, details } = req.body;

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
};
