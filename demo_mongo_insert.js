var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
  if(err) throw err;

  var myObject = {name:"Raman", age: 28};
  db.collection("customers").insertOne(myObject,function(err,res){
    if(err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

