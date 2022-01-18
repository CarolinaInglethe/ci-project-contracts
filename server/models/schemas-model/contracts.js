const mongoose = require('mongoose');
const connection = require('../connection');

const contractsSchema = new mongoose.Schema({
    // criar Schema/Collection , determinar campos e tipos:
    country: { type: String  },
    state: { type: String }, 
    city:{ type: String },
    documentNumber:{ type: String },
    socialReason:{ type: String },
    address:{ type: String },
    district:{ type: String },
    number:{ type: String },
    zipCode:{ type: String },
    email:{ type: String },
    phone:{ type: String },
    contractsStartsIn:{ type: String },
    contractsEndsIn:{ type: String },
    company: { type: String }
});

const Contracts = connection.model('contracts', contractsSchema);

module.exports = Contracts;