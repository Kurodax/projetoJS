const { Router } = require("express");

const auth = require("./middlewares/auth");

const { home, createuser, index, alterardados, deletardados } = require("./controllers/bora");

const routes = Router();

routes.get("/listausers", auth, index);
routes.post("/login", home);
routes.post("/createusers", createuser);
routes.put("/alterar/:id", alterardados);
routes.delete("/delete/:id", deletardados);

module.exports = routes;