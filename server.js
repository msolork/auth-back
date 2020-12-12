const {port} = require("./config")
const app = require("./app")
require("./databse/connection")

app.listen(port, () => {
  console.log("Server running")
})