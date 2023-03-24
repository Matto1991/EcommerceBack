const { Admin } = require("../models");

async function index(req, res) {
  const admin = await Admin.findAll()
  res.json(admin);
}

module.exports = {
  index,
};
