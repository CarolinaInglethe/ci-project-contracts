const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretApi = process.env.secretApi;

const jwtConfig = {
  expiresIn:'1d',
  algorithm:'HS256'
};

const genToken = (userName) => {
  return jwt.sign({ userName }, secretApi, jwtConfig)
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify( token, secretApi)

    return decoded.userName;

  } catch (err) {
    console.log('Falha na verificação')
    return null;
  };
}

module.exports = {
    genToken,
    verifyToken,
}