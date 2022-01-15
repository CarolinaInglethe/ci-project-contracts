const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const controllersLogin = require('./controllers/login');
const constrollersGetContracts = require('./controllers/getContracts');
const controllersCreateContract = require('./controllers/createContract');

const auth = require('./middlewares/auth')
require('dotenv').config();


const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


// -----
app.post('/login', controllersLogin);
app.get('/contracts', auth, constrollersGetContracts);
app.post('/createContract', auth , controllersCreateContract);

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// -----

app.listen(PORT, () => {
  console.log(`Servidor Online na porta: ${PORT}`);
});