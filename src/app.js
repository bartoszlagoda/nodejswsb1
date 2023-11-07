const express = require("express")
const app = express()

app.get("/home", (_req, res) => {
    res.status(200).send("Express")
})

module.exports = app
