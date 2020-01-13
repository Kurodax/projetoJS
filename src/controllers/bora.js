const jwt = require("jsonwebtoken");

exports.home = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //Gera a chave token
  const token = jwt.sign(
    { username: username, password: password },
    "chavetoken"
  );

  res.json({ token: token });
};

exports.createuser = (req, res) => {
  const token = req.body.token;
  const decoded = jwt.verify(token, "chavetoken");

  console.log("decoed: ", decoded);

  if (decoded) {
    res.status(200).json({
      message: "Usuário criado."
    });
  } else {
    res.status(401).json({
      message: "Não autorizado."
    });
  }
};
