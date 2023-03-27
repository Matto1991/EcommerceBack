const { User } = require("../models");

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
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {

  
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// async function token (req, res) {
//   const user = await User.findOne({email: req.body.email});
//   if(user) {
//     const match = await bcrypt.compare(req.body.password, user.password)
//     console.log(match)
//     if (match) {
//       const token = jwt.sign({id: `${user.id}`}, "")
//     }
//   }
// }

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
