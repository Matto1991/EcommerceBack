function requireAdmin(req, res, next) {
  if (req.auth && req.auth.isAdmin) {
    return next();
  } else {
    return res.status(403).json({ message: "Access denaid, only for admins" });
  }
}

module.exports = { requireAdmin };
