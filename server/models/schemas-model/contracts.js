const mongoose = require('mongoose');
const connection = require('../connection');

const contractsSchema = new mongoose.Schema({
    // criar Schema/Collection , determinar campos e tipos:
  documentNumber: { type: Number, require: true },
  socialReason: { type: Number, require: true },
  company: { type: Number, require: true },
  distributor: { type: Number, require: true},
  adress: {
    country: { type: String, require: true },
    state:  { type: String, require: true } ,
    city: { type: String, require: true },
    address: { type: String},
    distric: { type: String },
    number: { type: Number },
    zipCode: { type: Number },
  },
  contact: {
    email: { type: String, require: true },
    phone: { type: Number, require: true },
  },
  dates: {
    contractStarts: { type: Date, require: true },
    contractsEnds: { type: Date, require: true },
    dueDay: { type: Date, require: true },
  }
});

const Contracts = connection.model('contracts', contractsSchema);

module.exports = Contracts;