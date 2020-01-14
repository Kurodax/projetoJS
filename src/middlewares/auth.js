const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, "chavetoken", (err, data) => {
    if (err)
      return res.status(401).json({
        message: "Usuário não autorizado"
      });

    return next();
  });
};
