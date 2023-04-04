const { User, Admin } = require("../models");
const jwt = require("jsonwebtoken");

async function userToken(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const checkJwt = await user.isValidPassword(password);

      if (checkJwt) {
        const token = jwt.sign({ id: user.id, isAdmin: false }, process.env.SECRET_KEY);
        return res.json({ token, id: user.id, isAdmin: false });
      } else {
        return res.json({ message: "Invalid credentials" });
      }
    } else {
      return res.json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
  }
}

async function adminToken(req, res) {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ where: { email: email } });

    if (admin) {
      const checkJwt = await admin.isValidPassword(password);

      if (checkJwt) {
        const token = jwt.sign({ id: admin.id, isAdmin: true }, process.env.SECRET_KEY);
        return res.json({ token, id: admin.id, isAdmin: true });
      } else {
        return res.json({ message: "Invalid credentials" });
      }
    } else {
      return res.json({ message: "Admin not found" });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = { userToken, adminToken };
