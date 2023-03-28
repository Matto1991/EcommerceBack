const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING(100),
          allowNull: true,
          defaultValue: "",
        },
        phone: {
          type: DataTypes.STRING(20),
          allowNull: true,
          defaultValue: "",
        },
        avatar: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );

    User.beforeBulkCreate(async (users) => {
      for (const user of users) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    });

    User.beforeCreate(async (user) => {
      user.password = await bcrypt.hash(user.password, 10);
    });

    return User;
  }
}

module.exports = User;
