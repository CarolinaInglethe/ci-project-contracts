const modelsUpdateContract = require('../models/createContract')

module.exports = async (id, data) => {
    
    const updateContract = await modelsUpdateContract(id, data);

    if (!updateContract) {
      return {
        err: {
          message: "Houve um erro interno ao criar o contrato"
        }
      }
    }

    return updateContract;
};
