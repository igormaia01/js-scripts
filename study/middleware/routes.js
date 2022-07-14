const express = require('express');
const route = express.Router();
const homeController = require('./src/Controllers/homeController');
const contatoController = require('./src/Controllers/contatoController');

function MeuMiddleware(req, res, next) {
    req.session = { nome: 'igor', sobrenome: 'maia' };
    console.log('passei no middleware');
    next();
}

// rotas da home
route.get('/', MeuMiddleware, homeController.paginaInicial);
route.post('/', homeController.trataPost)

// rotas contanto
route.get('/contato', contatoController.paginaInicial);

module.exports = route;