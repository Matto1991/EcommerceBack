const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class Admin extends Model {
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
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
        avatar: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "admin",
      },
    );

    Admin.beforeBulkCreate(async (admins) => {
      for (const admin of admins) {
        admin.password = await bcrypt.hash(admin.password, 10);
      }
    });

    Admin.beforeCreate(async (admin) => {
      admin.password = await bcrypt.hash(admin.password, 10);
    });

    return Admin;
  }
}

module.exports = Admin;
