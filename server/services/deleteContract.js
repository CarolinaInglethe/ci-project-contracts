const modelsDeleteContract = require('../models/deleteContract')

module.exports = async (id) => {

    const deletedContract = await modelsDeleteContract(id);

    if (!deletedContract) {
      return {
        err: {
          message: "erro interno ao deletar o contrato"
        }
      }
    }

    return deletedContract;
};
