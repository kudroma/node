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
  var sql = "SELECT * FROM Customers LIMIT 5 OFFSET 2";
  con.query(sql,function(err,result,fields){
    if(err) throw err;
    console.log(result);
  });
});