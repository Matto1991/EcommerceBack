// function requireAdmin(req, res, next) {
//     if (req.auth && req.auth.id) {
//     next();
//   } else {
//     res.json("No admin auth found");
//   }
// }

function requireAdmin(req, res, next) {
    const userId = req.auth.id;
    User.findById(userId, function(err, user) {
      if (err) {
        res.status(500).json({ message: 'Server error' });
        return;
      }
  
      if (!user || !user.isAdmin) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }
      // El usuario autenticado es un administrador, permitir que la solicitud continúe.
      next();
    });
  }

module.exports = { requireAdmin };
