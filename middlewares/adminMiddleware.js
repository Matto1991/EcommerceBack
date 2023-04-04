function requireAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    console.log(req.user)
    return next();
  } else {
    return res.status(403).json({ message: "Acceso denegado" });
  }
}

module.exports = { requireAdmin };
