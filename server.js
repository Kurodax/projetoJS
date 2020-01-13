const express = require("express");
const app = express();
const routes = require("./src/routes");

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server conect in port 3000!");
});
