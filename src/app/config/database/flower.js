const  db  = require('./database');

function getFlower() {
    db.connect();
  connection.query('select * from flower', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}
module.exports = {getFlower};