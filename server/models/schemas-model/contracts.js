const mongoose = require('mongoose');
const connection = require('../connection');
const Companies = require('./companies')

const contractsSchema = new mongoose.Schema({
    // criar Schema/Collection , determinar campos e tipos:
  documentNumber: { type: Number, require: true },
  socialReason: { type: Number, require: true },
  company: { 
    type: mongoose.Schema.ObjectId,
    ref: Companies,
    index: true 
  },
  distributor: { type: Number },
  adress: {
    country: { type: String },
    state:  { type: String } ,
    city: { type: String },
    address: { type: String },
    distric: { type: String },
    number: { type: Number },
    zipCode: { type: Number },
  },
  contact: {
    email: { type: String },
    phone: { type: Number },
  },
  dates: {
    contractStarts: { type: Date },
    contractsEnds: { type: Date },
    dueDay: { type: Date },
  }
});

const Contracts = connection.model('contracts', contractsSchema);

module.exports = Contracts;