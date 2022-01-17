const mongoose = require('mongoose');
const connection = require('../connection');

const contractsSchema = new mongoose.Schema({
   name: { type: String, require: true }
});

const Companies = connection.model('companies', contractsSchema);

module.exports = Companies;