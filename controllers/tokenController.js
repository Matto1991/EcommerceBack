const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function token(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const checkJwt = await user.isValidPassword(password);

      if (checkJwt) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return res.json({ token, id: user.id });
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

module.exports = { token };
