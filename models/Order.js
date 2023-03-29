const { Model, DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");

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
          type: Sequelize.ENUM("pending", "active", "disabled"), // cuales son los estado de la orden en proceso
          defaultValue: "pending",
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
