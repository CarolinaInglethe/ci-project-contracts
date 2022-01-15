const mongoose = require('mongoose');

const connection = mongoose.createConnection(
  "mongodb://localhost:27017/contractsFlexge"
);

module.exports = connection;

// Referencias mongoose :

// https://mongoosejs.com/
// https://www.youtube.com/watch?v=b6vjbOk48_8