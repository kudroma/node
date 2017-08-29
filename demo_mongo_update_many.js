var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
  if(err) throw err;

  var queryObject = {};  
  var newObject = {$set:{institution: "ITMO"}};

  db.collection("customers").updateMany(queryObject,newObject,function(err,res){
    if(err) throw err;

    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});

