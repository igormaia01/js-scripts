const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true })); // serve para tratar o body das requisicoes
app.use(routes);

app.listen(3000, () => {
    console.log('Acessa http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
