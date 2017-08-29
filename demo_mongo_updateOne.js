var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
  if(err) throw err;

  var queryObject = {name: "Raman"};  
  var newObject = {name: "Raman", age: 28, hobby: "cognitive science"};

  db.collection("customers").updateOne(queryObject,newObject,function(err,result){
    if(err) throw err;

    console.log("1 document updated");
    db.close();
  });
});

