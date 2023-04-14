const mongoose = require('mongoose');
async function connection() {
  try {
    await mongoose.connect(
      'mongodb+srv://d1715:123zxcAsd@dantv.9e5ud4b.mongodb.net/?retryWrites=true&w=majority'
      // {
      //   //userNewUrlParser: true,
      //   //userUnifiedTopology: true,
      // }
    );
    console.log('connected');
  } catch (error) {
    throw error;
  }
}

module.exports = { connection };
