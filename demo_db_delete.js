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
  var sql = "DELETE FROM Customers WHERE id BETWEEN 15 and 29";
  con.query(sql,function(err,result,fields){
    if(err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});