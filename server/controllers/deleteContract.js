const servicesDeleteContract = require('../services/deleteContract');

module.exports = async (req,res) => {
    try {
        const { id } = req.params;

        const deleteContract = await servicesDeleteContract(id);
    
        if (deleteContract.err) {
          return res.status(401).json(deleteContract)
        }
    
        return res.status(200).json(deleteContract);
    } catch (err) {
        return res.status(500).json({ message: "Erro interno" })
    }
};
