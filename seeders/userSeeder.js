const { User } = require("../models");
const db = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "Frank",
      lastname: "Loi",
      password: "1234",
      email: "frank@loi.com",
      address: "Avenida Rivera 250",
      phone: "096458789",
      avatar: "urlavatar",
    },
  ];
  await db.User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de users.");
};
