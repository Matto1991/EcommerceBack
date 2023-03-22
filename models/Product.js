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
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        images: {
          type: DataTypes.JSON,
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
        },
        stock: {
          type: DataTypes.INTEGER,
        },
        featured: {
          type: DataTypes.BOOLEAN,
        },
        slug: {
          type: DataTypes.STRING,
        },
        category: {
          type: DataTypes.STRING,
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
