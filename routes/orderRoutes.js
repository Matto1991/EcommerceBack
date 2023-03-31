const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  orderController.index,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  orderController.show,
);

router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  orderController.store,
);

module.exports = router;
