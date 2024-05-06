// const mongoose = require('mongoose');
// async function connection() {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://d1715:123zxcAsd@dantv.9e5ud4b.mongodb.net/?retryWrites=true&w=majority'
//       // {
//       //   //userNewUrlParser: true,
//       //   //userUnifiedTopology: true,
//       // }
//     );
//     console.log('connected');
//   } catch (error) {
//     throw error;
//   }
// }
const database = require('mysql');
const connection = database.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'flower_shop',
});
class DatabaseConnection{
  async  connect() {
    if (connection.state == 'disconnected') {
      try {
        connection.connect();
        console.log('connected');
      } catch (error) {
        throw error;
      }
    } else {
      return;
    }
  }
  getInstanceConnection()
  {
    return connection;
  }
  getFlower()
  {
    connection.query('select * from flower', function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  }
}

module.exports = new DatabaseConnection();
