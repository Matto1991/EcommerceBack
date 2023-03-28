const { User } = require("../models/User");
const jwt = require("jsonwebtoken");

async function token(req, res) {
  try {
    const email = req.body.email;
    console.log(email);
    if (!email) {
      return res.json("email requerida");
    }

    const user = await User.findOne({ where: { email: email } });
    console.log("user encontrado", user);

    if (user) {
      const checkJwt = await user.isValidPassword(req.body.password);
      console.log(checkJwt)
      const token = jwt.sign({ id: user.id }, "secretKey");

      if (checkJwt) {
        return res.json({ token, id: user.id });
      } else {
        return res.json( "La pass es incorrecta");
      }
    } else {
      return res.json( "El user no existe");
    }
  } catch (err) {
    console.log(err);
  }
}


module.exports = { token };
