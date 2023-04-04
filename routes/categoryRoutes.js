const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { requireAdmin } = require("../middlewares/adminMiddleware");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", categoryController.index); // Admin page

router.get("/:name", categoryController.show); // Category page

router.post(
  "/store",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  categoryController.store,
);

router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  categoryController.update,
);

router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  categoryController.destroy,
);

module.exports = router;
