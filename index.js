const express = require("express");
const app = express();
const jobrouter = require("./routes/job");
const db = require("./db");

require('dotenv').config()
const PORT = process.env.PORT ||3000;

app.use(express.json());
app.use("/", jobrouter);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log("server is running " + PORT);
});
