const Contracts = require('./schemas-model/contracts');

module.exports = async () => {

  const getContracts = await Contracts.find()

  return getContracts;

}