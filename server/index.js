const express = require('express');
const bodyParser = require('body-parser');
const controllersLogin = require('./controllers/login');
const constrollersGetContracts = require('./controllers/getContracts');
const controllersCreateContract = require('./controllers/createContract');

const auth = require('./middlewares/auth')
require('dotenv').config();


const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // trabalhar com formulario/html
app.use(bodyParser.json()); // trabalhar com json


// -----
app.post('/login', controllersLogin);
app.get('/contracts', auth, constrollersGetContracts);
app.post('/createContract', controllersCreateContract)

// -----

app.listen(PORT, () => {
  console.log(`Servidor Online na porta: ${PORT}`);
});