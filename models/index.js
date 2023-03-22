const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Admin = require("./Admin");
const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");
const Category = require("./Category");

Admin.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);
User.initModel(sequelize);
Category.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  sequelize,
  Admin,
  User,
  Order,
  Product,
  Category
};


// User.hasMany(Order, { foreignKey: "userId" });
// Order.belongsTo(User, { foreignKey: "userId" });

// Category.hasMany(Product, { foreignKey: "categoryId" });
// Product.belongsTo(Category, { foreignKey: "categoryId" });