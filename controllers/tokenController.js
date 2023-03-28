const User = require("../models/User");
const jwt = require("jsonwebtoken");

async function token(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      const checkJwt = await user.isValidPassword(req.body.password);

      const token = jwt.sign({ id: user.id }, "secretKey");

      if (user && checkJwt) {
        return res.json({ token, id: user.id });
      } else return res.json({ message: "El usuario no existe " });
    } else return res.json("No se pudo loguear");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  token,
};
