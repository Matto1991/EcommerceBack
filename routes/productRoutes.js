const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { expressjwt: checkJwt } = require("express-jwt");
const { requireAdmin } = require("../middlewares/adminMiddleware");

//Public
router.get("/featured", productController.featured);
router.get("/", productController.index);
router.get("/:id", productController.show);

//Private-Admin
router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  productController.store,
); // Admin store product

router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  productController.update,
); // Admin update product

router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  productController.destroy,
); // Admin destroy product

module.exports = router;
