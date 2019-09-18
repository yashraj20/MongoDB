
var Mongo = require('mongodb');
//let ur = "mongodb://localhost/emp";

Mongo.connect('mongodb://localhost/emp',(err,conn) => {
    if(err) {
        throw err;
    }
   
    let database = conn.db('emp');

    let myobj = [
        { name: 'Yash', address: 'Santoshnagar'},
        { name: 'Raj', address: 'LB Nagar'},
        { name: 'Gowtham', address: 'Nizampet'},
        { name: 'Koijam', address: 'Ameerpet'}
      ];


      database.collection('customers').insertMany(myobj,(err,data) => {
          if(err) {
              throw err;
          }

          console.log("Number of documents inserted: " + data.insertedCount);
          conn.close();
      })


})
