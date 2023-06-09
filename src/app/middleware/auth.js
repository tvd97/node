const jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_LOGIN);
    req.id = decoded.id;
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

module.exports = authentication;
