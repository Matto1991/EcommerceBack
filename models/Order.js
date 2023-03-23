const { Model, DataTypes } = require("sequelize");
const {Sequelize}  = require("sequelize")

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        status: {
          type: Sequelize.ENUM("pending", "active", "disabled"),
          defaultValue: "pending",
        },
        adress: {
          type: DataTypes.JSON,
        },
        products: {
          type: DataTypes.JSON,
        },
      },
      {
        sequelize,
        modelName: "order",
      },
    );
    return Order;
  }
}

// console.log(Order.getAttributes().status.values);

module.exports = Order;
