const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/user');
const loginController = require('./controller/login');
const validUser = require('./middlewares/validUser');
const validLogin = require('./middlewares/validLogin');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validUser.validPassword, validUser.validEmail, validUser.validUser,
  userController.emailExist, userController.createUser);

app.post('/login', validLogin.validEmail, validLogin.validPassword, loginController.emailExist);