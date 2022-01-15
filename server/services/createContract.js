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

    return createdContract;
};
