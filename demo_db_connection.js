var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "kudroma",
  password: ",vyrdcrnrpjpnprl"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});