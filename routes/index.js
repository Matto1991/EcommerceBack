const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");

module.exports = (app) => {
  app.use("/orders", orderRoutes);
  app.use("/products", productRoutes);
  app.use("/users", userRoutes);
  app.use("/admins", adminRoutes);
  app.use("/categories", categoryRoutes);
};
