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


module.exports = {
    genToken,
}