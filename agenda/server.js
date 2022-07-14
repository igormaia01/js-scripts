require('dotenv').config(); // variaveis de ambiente
const express = require('express'); // iniciar express
const app = express(); // iniciar express
const mongoose = require('mongoose'); // mongoose modelar a base de dados
const { middlewareGlobal, checkCsrfError, csrfMiddleware }  = require('./src/middlewares/middleware'); // funcoes executadas na rota

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true }) // conectar a base de dados
    .then(() => {
        console.log('conectado a base de dados');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session'); // identificar o navegador do cliente(cookies)
const MongoStore = require('connect-mongo'); // sessoes vao ser salvas na base de dados
const flash = require('connect-flash'); // flash messages , messages que aparecem e somem rapidamente e sao salvas em sessao
const routes = require('./routes'); // rotas da aplicacao
const path = require('path');   // trabalhar com caminhos
const helmet = require('helmet'); // seguranca da aplicacao
const csrf = require('csurf'); // csrf tokens para formularios(seguranca)

app.use(express.urlencoded({ extended: true })); // serve para tratar o body das requisicoes
app.use(express.json()); // serve para tratar o body para json
app.use(express.static(path.resolve(__dirname, 'public'))); // conteudos estaticos (imagens/css/ js)
app.use(helmet());

const sessionOptions = session({ // configuracoes de sessao
    secret: 'dsadsa@!DSADsadsa213412321',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 ,
        httpOnly: true,
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // views arquivs que redenriza na tela
app.set('view engine', 'ejs'); // engine que esta sendo utilizada para redenrizar as views
app.use(csrf()); // utilizando csrf
app.use(middlewareGlobal); // utilizando middleware
app.use(checkCsrfError); // utilizando middleware
app.use(csrfMiddleware); // utilizando middleware

app.use(routes);

app.on('pronto', () => { // iniciando servidor
    app.listen(3001, () => {
        console.log('Acessa http://localhost:3001');
        console.log('Servidor executando na porta 3001');
    });
});


