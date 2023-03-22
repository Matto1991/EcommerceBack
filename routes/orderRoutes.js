const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.index); // Admin panel - Dashboard
router.post("/", orderController.store); // Admin store order
router.patch("/:id", orderController.update); // Admin update order

module.exports = router;
