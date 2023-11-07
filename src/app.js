const express = require("express")
const app = express()

app.get("/", (_req, res) => {
  res.status(200).send("Welcome to my Express")
})

module.exports = app;
