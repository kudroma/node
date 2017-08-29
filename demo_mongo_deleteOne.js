var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
  if(err) throw err;

  var queryObject = {name: "Zhenya Bedritski"};  

  db.collection("customers").deleteOne(queryObject,function(err,result){
    if(err) throw err;

    console.log("delete one object");
    db.close();
  });
});

