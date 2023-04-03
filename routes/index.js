const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");
const authRoutes = require("./authRoutes");
const resetRoutes = require("./resetRoutes")

module.exports = (app) => {
  app.use("/orders", orderRoutes);
  app.use("/products", productRoutes);
  app.use("/users", userRoutes);
  app.use("/admins", adminRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/auth", authRoutes);
  app.use("/reset", resetRoutes);
};
