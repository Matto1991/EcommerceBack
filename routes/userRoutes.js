const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  userController.index,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  userController.show,
);
router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  userController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  userController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  userController.destroy,
);

module.exports = router;
