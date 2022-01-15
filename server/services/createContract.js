const modelsCreateContract = require('../models/createContract')

module.exports = async (data) => {
    
    if(!data.documentNumber || !data.socialReason) {
      return {
        err: {
          message: "Falta dados obrigatórios no corpo da requisição"
        }
      };
    }

    const createdContract = await modelsCreateContract(data);

    if (!createdContract) {
      return {
        err: {
          message: "Houve um erro interno ao criar o contrato"
        }
      }
    }

    return createdContract;
};
