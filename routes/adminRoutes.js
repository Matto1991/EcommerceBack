const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");
const { requireAdmin } = require("../middlewares/adminMiddleware");

router.get(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  adminController.index,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  adminController.show,
);
router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  adminController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  adminController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  requireAdmin,
  adminController.destroy,
);

module.exports = router;
