const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { requireAdmin } = require("../middlewares/adminMiddleware");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", categoryController.index); // Admin page
router.get("/:name", categoryController.show); // Category page
router.post(
  "/store",
//   requireAdmin,
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  categoryController.store,
);
router.patch(
  "/:id",
//   requireAdmin,
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  categoryController.update,
);
router.delete(
  "/:id",
//   requireAdmin,
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  categoryController.destroy,
);
module.exports = router;
