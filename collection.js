var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/emp";
MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    var dbase = db.db("emp"); //here
    dbase.createCollection("customers", function (err, res) {
        if (err)
            throw err;
        console.log("Collection created!");
        db.close(); //close method has also been moved to client obj
    });
});
