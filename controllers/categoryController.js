const { Category } = require("../models");

async function index(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
}

module.exports = {
    index
};
