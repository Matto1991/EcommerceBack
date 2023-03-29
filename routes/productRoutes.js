const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { expressjwt: checkJwt } = require("express-jwt");

//Public
router.get("/", productController.index); // Home page
router.get("/featured", productController.featured);
router.get("/:id", productController.show); // Product page

//Private-Admin
router.post(
  "/",
//   checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  productController.store,
); // Admin store product
router.patch("/:id", productController.update); // Admin update product
router.delete("/:id", productController.destroy); // Admin destroy product

module.exports = router;
