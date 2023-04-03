const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { requireAdmin } = require("../middlewares/adminMiddleware");

router.post("/users", authController.userToken);
router.post("/admins", requireAdmin, authController.adminToken);

module.exports = router;
