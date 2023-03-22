const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use("/orders", orderRoutes);
  app.use("/products", productRoutes);
  app.use("/users", userRoutes);
  app.use("/admin", adminRoutes);
};
