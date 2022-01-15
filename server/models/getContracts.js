const Contracts = require('./schemas-model/contracts');

module.exports = async () => {

  const getContracts = await Contracts.find()
    .then((findContracts) => findContracts)
    .catch((e) => null)

  return getContracts;

}