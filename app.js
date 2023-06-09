const express = require("express");
const dotenv = require("dotenv");
const expensesRoute = require("./routes/expenses");

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

app.use("/api/expenses", expensesRoute);

app.listen(port, function () {
  console.log(`Servidor en el puerto ${port} `);
});
