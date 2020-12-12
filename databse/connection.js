const mysql = require("mysql")

const conn = mysql.createConnection({
  host: "",
  database: "auth_chat",
  user: "root",
  password: ""
})

conn.connect((err) => {
  if(err) throw err
  
})


module.exports = conn

