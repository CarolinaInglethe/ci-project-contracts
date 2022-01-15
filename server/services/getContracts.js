const modelsGetContracts = require('../models/getContracts')

module.exports =  async () => {
  const getContracts = await modelsGetContracts();

  if (!getContracts || getContracts.length === 0) {
    return {
      err: {
        message: "Contratos não encontrados" 
      }
    }
  };

  return getContracts;
};
