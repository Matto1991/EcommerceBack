const { User } = require("../models");
const formidable = require("formidable");

async function index(req, res) {
  try {
    const user = await User.findAll();
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/users",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const { firstname, lastname, email, password } = fields;

    const existingEmail = await User.findOne({ where: { email } });

    if (existingEmail) {
      return res.json({ message: "User already exists" });
    } else {
      await User.create({
        firstname,
        lastname,
        email,
        avatar: files.image.newFilename,
        password: password,
      });
      return res.end();
    }
  });
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { firstname, lastname, email } = req.body;

    await User.update({ firstname, lastname, email }, { where: { id } });
    const updatedUser = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    res.json({ user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
}

async function destroy(req, res) {
  const id = req.params.id;
  try {
    const deletedUser = await User.destroy({
      where: {
        id: id,
      },
    });
    return res.json(id);
  } catch (error) {
    console.error("Error al eliminar el usuario", error);
    res.status(500).send({ message: "Error al eliminar el producto." });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
