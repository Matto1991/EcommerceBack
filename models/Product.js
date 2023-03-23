const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(100),
        },
        description: {
          type: DataTypes.STRING(255),
        },
        images: {
          type: DataTypes.JSON(255),
        },
        price: {
          type: DataTypes.DECIMAL(10),
        },
        stock: {
          type: DataTypes.INTEGER,
        },
        featured: {
          type: DataTypes.BOOLEAN,
        },
      },
      {
        sequelize,
        modelName: "product",
      },
    );

    return Product;
  }
}

module.exports = Product;
