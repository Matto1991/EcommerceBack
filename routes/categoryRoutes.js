const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.index); // Admin page
router.get("/:name", categoryController.show); // Category page

module.exports = router;