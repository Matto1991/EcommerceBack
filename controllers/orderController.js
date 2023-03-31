const { Order, User, Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const orders = await Order.findAll();
    return res.json(orders);
  } catch (err) {
    console.log(err);
  }
}

// Display the specified resource.
async function show(req, res) {
  console.log(req.auth);

  try {
    const order = await Order.findOne({
      where: {
        id: req.auth.id,
      },
    });
    console.log(req.auth.id);
    return res.json(order);
  } catch (err) {
    console.log(err);
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  console.log(
    "*************************************************************************************************************************",
  );
  console.log(req.auth);

  try {
    const userId = req.auth.id;
    const { products, details } = req.body;

    const newOrder = await Order.create({
      userId,
      products,
      details,
    });
    console.log("llegue");
    return res.json(newOrder);
  } catch (err) {
    console.log(err);
  }
}
// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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
