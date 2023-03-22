const { Model, DataTypes } = require("sequelize");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING(100),
        },
        lastname: {
          type: DataTypes.STRING(100),
        },
        email: {
          type: DataTypes.STRING(100),
        },
        password: {
          type: DataTypes.STRING(100),
        },
      },
      {
        sequelize,
        modelName: "admin",
      },
    );
    return Admin;
  }
}

module.exports = Admin;
