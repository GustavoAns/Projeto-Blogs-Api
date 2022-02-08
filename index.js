const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/user');
const loginController = require('./controller/login');
const categorieController = require('./controller/categorie');
const postController = require('./controller/post');
const validUser = require('./middlewares/validUser');
const validLogin = require('./middlewares/validLogin');
const validCategorie = require('./middlewares/validCategorie');
const validPost = require('./middlewares/validPost');

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

app.get('/user', validUser.validToken, userController.getAll);

app.get('/user/:id', validUser.validToken, userController.getById);

app.post('/categories', validCategorie.validToken, validCategorie.validName,
  categorieController.createCategorie);

app.get('/categories', validCategorie.validToken, categorieController.getAll);

app.post('/post', validPost.validBody, validPost.validToken, postController.validCategory,
  postController.createPost);

app.get('/post', validPost.validToken, postController.getAll);
