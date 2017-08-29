var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
  if(err) throw err;

  var myObjects = [
     {name: "Dmitry Litvin", age: 23, hobby:"IT"},
     {name: "Zhenya Bedritski", age: 24, hobby:"guitar"},
     {name: "Anton Michilavich", age: 68, hobby:"nastoiki"},
     {name: "Pavel Sharonov", age: 31, hobby:["taikwando", "turniki", "uborka doma"]}
  ];

  db.collection("customers").insertMany(myObjects,function(err,res){
    if(err) throw err;
    console.log("Number of document inserted: " + res.insertedCount);
    console.log(res.result);
    db.close();
  });
});

