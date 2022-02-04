const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/user');
const validUser = require('./middlewares/validUser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validUser.validUser, userController.createUser);