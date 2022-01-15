const servicesCreateContract = require('../services/createContract');

module.exports = async (req,res) => {
  try {
    const createContract = await servicesCreateContract(req.body);

    if (createContract.err) {
      return res.status(401).json(createContract)
    }

    return res.status(200).json(createContract);
  } catch (err) {
    return res.status(500).json({ message: "Erro interno" })
  }
};
