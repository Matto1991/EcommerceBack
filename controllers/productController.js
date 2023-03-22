const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll();
  return res.json(products);
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function showCategory(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  showCategory,
  store,
  update,
  destroy,
};