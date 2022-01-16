const Contracts = require('./schemas-model/contracts');

module.exports = async (id) => {

  const deleteContract = await Contracts.deleteOne({ _id: id })
    .then((deletedContract) => deletedContract)
    .catch((e) => null)

  return deleteContract;

}