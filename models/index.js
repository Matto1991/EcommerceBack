const { Sequelize } = require("sequelize");

const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};
if (process.env.DB_CONNECTION === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
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
  Category,
};
