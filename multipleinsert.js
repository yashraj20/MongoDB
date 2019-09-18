var Mongo = require('mongodb');
//let ur = "mongodb://localhost/emp";
Mongo.connect('mongodb://localhost/emp', function (err, conn) {
    if (err) {
        throw err;
    }
    var database = conn.db('emp');
    var myobj = [
        { name: 'Yash', address: 'Santoshnagar' },
        { name: 'Raj', address: 'LB Nagar' },
        { name: 'Gowtham', address: 'Nizampet' },
        { name: 'Koijam', address: 'Ameerpet' }
    ];
    database.collection('customers').insertMany(myobj, function (err, data) {
        if (err) {
            throw err;
        }
        console.log("Number of documents inserted: " + data.insertedCount);
        conn.close();
    });
});
