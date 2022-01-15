const mongoose = require('mongoose');
const connection = require('../connection');

const contractsSchema = new mongoose.Schema({
   _id: { type: Number, require: true },
   name: { type: String, require: true }
});

const Companies = connection.model('contracts', contractsSchema);

module.exports = Companies;