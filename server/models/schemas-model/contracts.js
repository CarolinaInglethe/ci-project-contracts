const mongoose = require('mongoose');
const connection = require('./connection');

const contractsSchema = new mongoose.Schema({
    // criar Schema/Collection , determinar campos e tipos:
  documentNumber: { type: Number, require: true },
  socialReason: { type: Number, require: true },
  company: { type: Number, require: true },
  distributor: { type: Number, require: true},
  adress: {
    zipCode: { type: Number },
    country: { type: String, require: true },
    state:  { type: String, require: true } ,
    city: { type: String, require: true },
    address: { type: String},
    distric: { type: String },
    number: { type: Number }
  },
  contact: {
    email: { type: String, require: true },
    phone: { type: Number, require: true },
  },
  dates: {
    contractStarts: { type: Date },
    contractsEnds: { type: Date, require: true },
    dueDay: { type: Date, require: true },
  }
});

const Contracts = connection.model('contracts', contractsSchema);

module.exports = Contracts;