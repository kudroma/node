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
  var sql = "CREATE TABLE Customers (name VARCHAR(255), adress VARCHAR(255))";
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("Table created!");
  });
});