const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", orderController.index); // Admin panel - Dashboard
router.get("/:id", orderController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  orderController.store,
); // Admin store order
router.patch("/:id", orderController.update); // Admin update order

module.exports = router;
