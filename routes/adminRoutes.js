const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  adminController.index,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  adminController.show,
);
router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  adminController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  adminController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  adminController.destroy,
);

module.exports = router;
