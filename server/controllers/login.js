const servicesLogin = require('../services/login')

module.exports = async (req, res, _next) => {
  try {
    const { username, password } = req.body;
    
    const login = await servicesLogin(username, password);
  
    if (login.err) return res.status(401).json(login);
  
    const { token } = login;
    res.token = token;
  
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json(login);

  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e })
  }

};
