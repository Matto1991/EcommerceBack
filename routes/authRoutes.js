const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/users", authController.userToken);
router.post("/admins", authController.adminToken);

module.exports = router;
