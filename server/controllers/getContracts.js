const servicesGetContracts = require('../services/getContracts')

module.exports = async (_req, res) => {
  try {
    const getContracts = await servicesGetContracts()

    if (getContracts.err) {
      return res.status(401).json(getContracts)
    }
    
    return res.status(200).json(getContracts);
    
  } catch (err) {
    console.log("Erro com servidor");
    res.status(500).json({ message: "Erro com servidor" })
  }

};