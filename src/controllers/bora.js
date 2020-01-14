const jwt = require("jsonwebtoken");
const usersmodel = require("../models/users");
const uuidv4 = require("uuid/v4");

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
  const id = uuidv4();
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const phone = req.body.phone;
  usersmodel.push({
    id: id,
    name: name,
    username: username,
    password: password,
    phone: phone
  });
  const resposta = usersmodel.map((valor, index) => {
    return valor;
  });

  return res.status(200).json({
    mensagem: "Ok",
    resposta: resposta
  });
};

exports.index = (req, res) => {
  return res.status(200).json({
    data: [],
    message: "lista de usuários"
  });
};

exports.alterardados = (req, res) => {
  usersmodel.forEach(item => {
    if (item.id == req.params.id) {
      item.name = req.body.name ? req.body.name : item.name;
      item.username = req.body.username ? req.body.username : item.username;
      item.password = req.body.password ? req.body.password : item.password;
      item.phone = req.body.phone ? req.body.phone : item.phone;
    }
  });
  const respostaltera = usersmodel.map((valor, index) => {
    return valor;
  });
  return res.status(200).json({
    mensagem: "Item alterado com sucesso!",
    respostaltera: respostaltera
  });
};

exports.deletardados = (req, res) => {
  const posicao = usersmodel.findIndex((elment, index) => {
    if (elment.id == req.params.id) return index;
  });
  const removedItem = usersmodel.splice(posicao, 1);
  const resposta = usersmodel.map((valor, index) => {
    return valor;
  });
  return res.status(200).json({
    mensagem: "Item deletado com sucesso!",
    resposta: resposta
  });
};
