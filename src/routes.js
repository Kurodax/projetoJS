const { Router } = require("express");

const { home, createuser } = require("./controllers/bora");

const routes = Router();

routes.post("/login", home);
routes.post("/createusers", createuser);

module.exports = routes;
