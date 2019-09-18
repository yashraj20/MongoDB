var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/emp";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("emp");
  var myobj = { name: "user1", address: "Hyd" , contact_no : 9999999999};
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});