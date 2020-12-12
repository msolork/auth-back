const express = require("express")
const router = require("./api/users/routes")
const app = express()

const routes = require("./routes")

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(routes)


module.exports = app