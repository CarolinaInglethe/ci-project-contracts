const { userNameFixo, passwordFixo } = require('../models/dataUser');
const authService = require('./utils/authService')

module.exports = async (username, password) => {
  if (!username || !password) {
    return {
      err: {
        message: "Você deve definir email e senha"
      }
    };
  };

  if (username !== userNameFixo || password !== passwordFixo) {
    return {
      err: {
        message: "Nome ou senha inválidos"
      }
    };
  };

  // gera token para autenticação:
  const token =  authService.genToken(username);

  return {
    username: userNameFixo,
    token: token,
  };
};
