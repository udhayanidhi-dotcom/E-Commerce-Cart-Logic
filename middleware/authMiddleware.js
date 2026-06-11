const authMiddleware = (req, res, next) => {
  console.log("Authentication successful");
  next();
};

module.exports = authMiddleware;