const modelsDeleteContract = require('../models/deleteContract')

module.exports = async (id) => {

    const createdContract = await modelsDeleteContract(id);

    if (!createdContract) {
      return {
        err: {
          message: "erro interno ao deletar o contrato"
        }
      }
    }

    return createdContract;
};
