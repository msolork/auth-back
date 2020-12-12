const userModel = require("./model")
const conn = require("../../databse/connection")

const path = require("path")

module.exports = {
  getUsers: (req, res) => {
    let ruta = path.join(__dirname, 'index.html')
    res.sendFile(ruta)
  },
  createUser: (req, res) => {
    
  }
}