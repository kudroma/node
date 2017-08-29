var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
  if(err) throw err;

  var myObjects = [
         { _id: 154, name: 'Chocolate Heaven' },
         { _id: 155, name: 'Tasty Lemons' },
         { _id: 156, name: 'Vanilla Dreams' }
  ];

  db.collection("products").insertMany(myObjects,function(err,res){
    if(err) throw err;
    console.log("Number of document inserted: " + res.insertedCount);
    console.log(res.result);
    db.close();
  });
});

