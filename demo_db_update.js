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
  var sql = "UPDATE Customers SET adress='Canyoun 123' WHERE adress='Valley 345'";
  con.query(sql,function(err,result,fields){
    if(err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});