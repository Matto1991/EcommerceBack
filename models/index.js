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

Admin.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);
User.initModel(sequelize);

User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  Admin,
  User,
  Order,
  Product,
};
