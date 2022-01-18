const mongoose = require('mongoose');
const connection = require('../connection');

const contractsSchema = new mongoose.Schema({
    // criar Schema/Collection , determinar campos e tipos:
    country: { type: String  },
    state: { type: String }, 
    city:{ type: String },
    documentNumber:{ type: Number },
    socialReason:{ type: Number },
    address:{ type: String },
    district:{ type: String },
    number:{ type: Number },
    zipCode:{ type: Number },
    email:{ type: String },
    phone:{ type: Number },
    contractsStartsIn:{ type: Date },
    contractsEndsIn:{ type: Date },
    selectCompany:{ typetype: Number },
});

const Contracts = connection.model('contracts', contractsSchema);

module.exports = Contracts;