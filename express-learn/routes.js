const express = require('express');
const route = express.Router();
const homeController = require('./Controllers/homeController');
const contatoController = require('./Controllers/contatoController');

// rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

// rotas contanto
route.get('/contato', contatoController.paginaInicial);

module.exports = route;