const Contracts = require('./schemas-model/contracts');

module.exports = async (data) => {

    const createdContract = await Contracts.insertOne({
      documentNumber: data.documentNumber,
      socialReason: data.socialReason,
      company: data.company,
      distributor: data.distributor,
      adress: {
        country: data.country,
        state:  data.state ,
        city: data.city,
        address: data.adress,
        distric: data.distric,
        number: data.number,
        zipCode: data.zipCode,
      },
      contact: {
        email: data.email,
        phone: data.phone,
      },
      dates: {
        contractStarts: data.contractStarts,
        contractsEnds: data.contractsEnds,
        dueDay: data.dueDay,
      }
    })
    .then((insertedContract) => insertedContract)
    .catch((e) => null)

    return createdContract;
}