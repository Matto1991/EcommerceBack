function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    res.json("No admin auth found");
  }
}

module.exports = { requireAdmin };
