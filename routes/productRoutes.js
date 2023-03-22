const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//Public
router.get("/", productController.index); // Home page
router.get("/:id", productController.show); // Product page
router.get("category/:name", productController.showCategory); // Category page

//Private-Admin
router.post("/", productController.store); // Admin store product
router.patch("/:id", productController.update); // Admin update product
router.delete("/:id", productController.destroy); // Admin destroy product

module.exports = router;
