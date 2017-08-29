var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "kudroma",
  password: ",vyrdcrnrpjpnprl",
  database: "mydb"
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE IF EXISTS Ñustomers";
  con.query(sql,function(err,result,fields){
    if(err) throw err;
    console.log("Table deleted!");
  });
});