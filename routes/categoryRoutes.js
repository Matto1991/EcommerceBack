const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.index); // Admin page
router.get("/:name", categoryController.show); // Category page
router.post("/store", categoryController.store);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);
module.exports = router;
