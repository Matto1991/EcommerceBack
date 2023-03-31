const { Admin } = require("../models");
const formidable = require("formidable");

async function index(req, res) {
  try {
    const admin = await Admin.findAll();
    res.json(admin);
  } catch (err) {
    console.log(err);
  }
}
async function show(req, res) {
  const { id } = req.params;
  try {
    const admin = await Admin.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    return res.json(admin);
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
    try {
      const { firstname, lastname, email, password } = fields;

      const existingEmail = await Admin.findOne({ where: { email } });
      if (existingEmail) {
        return res.json({ message: "Admin/User already exists", error: "Repeated email" });
      } else {
        await Admin.create({
          firstname,
          lastname,
          email,
          avatar: files.image.newFilename,
          password: password,
        });
        return res.json({ message: "Admin creado" });
      }
    } catch (error) {
      return res.json({ error: "Error al crear" });
    }
  });
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { firstname, lastname, email } = req.body;

    await Admin.update({ firstname, lastname, email }, { where: { id } });
    const updatedAdmin = await Admin.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    res.json({ admin: updatedAdmin });
  } catch (error) {
    console.error("Error: unable to edit admin", error);
    res.status(500).json({ message: "Error: unable to edit admin" });
  }
}

async function destroy(req, res) {
  const { id } = req.params;
  try {
    await Admin.destroy({
      where: {
        id,
      },
    });
    return res.json(id);
  } catch (error) {
    console.error("Error: unable to delete admin", error);
    res.status(500).send({ message: "Error: unable to delete admin." });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
