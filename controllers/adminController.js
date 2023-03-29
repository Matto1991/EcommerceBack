const { Admin } = require("../models");
const formidable = require("formidable");
async function index(req, res) {
  const admin = await Admin.findAll();
  res.json(admin);
}
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/users",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const { firstname, lastname, email, password } = fields;

    const existingEmail = await Admin.findOne({ where: { email } });

    if (existingEmail) {
      return res.json({ message: "Admin already exists" });
    } else {
      await Admin.create({
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

module.exports = {
  index,
  store,
};
