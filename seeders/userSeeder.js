const { User } = require("../models");
const db = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "Usuario",
      lastname: "Prueba",
      password: "1234",
      email: "usuario@ecozy.com",
      address: "Avenida Rivera 250",
      phone: "096458789",
      avatar: "user.png",
    },
  ];
  await db.User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de users.");
};
