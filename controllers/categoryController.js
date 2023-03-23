const { Category, Product } = require("../models");

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
    return res.json(category);
  } catch (err) {
    console.log("Category not found");
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

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
