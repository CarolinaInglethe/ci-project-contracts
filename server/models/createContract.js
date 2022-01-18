const Contracts = require('./schemas-model/contracts');

module.exports = async (data) => {

    const createdContract = await Contracts.create({
    country: data.country ,
    state: data.state, 
    city: data.city,
    documentNumber: data.documentNumber,
    socialReason: data.socialReason,
    address: data.address,
    district: data.district,
    number: data.number,
    zipCode: data.zipCode,
    email: data.email,
    phone: data.phone,
    contractsStartsIn: data.contractsStartsIn,
    contractsEndsIn: data.contractsEndsIn,
    selectCompany: data.selectCompany,
    })
    .then((insertedContract) => insertedContract)
    .catch((e) => null)

    return createdContract;
}