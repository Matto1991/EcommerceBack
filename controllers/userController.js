const { User } = require("../models");
const formidable = require("formidable");
const bcrypt = require("bcryptjs");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const user = await User.findAll();
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
}

// Display the specified resource.
async function show(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    //remover password
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
}

// Store a newly created resource in storage.
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

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const { id } = req.params;
    const { firstname, lastname, email } = req.body;

    await User.update({ firstname, lastname, email }, { where: { id } });
    const updatedUser = await User.findByPk(id);
    res.status(200).json({ user: updatedUser }); // Devolver el usuario actualizado
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error del servidor" });
  }
}
// Show the form for editing the specified resource.
async function edit(req, res) {}

// Remove the specified resource from storage.
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

// Otros handlers...

module.exports = {
  index,
  show,
  store,
  edit,
  update,
  destroy,
};
