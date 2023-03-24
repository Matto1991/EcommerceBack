const { Admin } = require("../models");
const db = require("../models");

module.exports = async () => {
  const admins = [
    {
      firstname: "Admin",
      lastname: "Admin",
      password: "1234",
      email: "admin@admin.com",
      avatar: "urlavatar",
    },
  ];
  await db.Admin.bulkCreate(admins);
  console.log("[Database] Se corrió el seeder de admins.");
};
