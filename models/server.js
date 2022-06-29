require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true })
    .then(() => {
        console.log('conectado a base de dados');
        app.emit('pronto') ;
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true })); // serve para tratar o body das requisicoes
app.use(express.static(path.resolve(__dirname, 'public'))); // conteudos estaticos
app.set('views', path.resolve(__dirname, 'src', 'views')); // views
app.set('view engine', 'ejs');
app.use(routes);

app.on('pronto', () => {
    app.listen(3001, () => {
        console.log('Acessa http://localhost:3001');
        console.log('Servidor executando na porta 3001');
    });
});


