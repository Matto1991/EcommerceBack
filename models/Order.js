const { Model, DataTypes } = require("sequelize");

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
          type: DataTypes.JSON,
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

module.exports = Order;
