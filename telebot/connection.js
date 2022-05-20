var mysql = require('mysql');

var con = mysql.createConnection({
// for when deployed to dockers
  host: "host.docker.internal",
// for local machine
  // host: "127.0.0.1",
  user: "is213",
  password: "",
  database: "mydb_telegram_bot"
});

process.on('uncaughtException', function (err) {
  console.log(err);
  process.exit(1);
}); 

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;