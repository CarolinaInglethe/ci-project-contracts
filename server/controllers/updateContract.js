const servicesUpdateContract = require('../services/updateContract')

module.exports = async (req,res) => {
    try {
        const updateContract = await servicesUpdateContract();
    
        if (updateContract.err) {
          return res.status(401).json(updateContract)
        }
    
        return res.status(200).json(updateContract);
      } catch (err) {
        return res.status(500).json({ message: "Erro interno" })
      }
};
