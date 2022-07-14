const module1 = require('./mod1');
const falaNomeFunction = require('./mod1').falaNome;
const { falaNome } = require('./mod1');
const { Pessoa } = require('./mod1');
const path = require('path');

console.log(module1);
falaNomeFunction();
falaNome();

const p1 = new Pessoa('igor');
console.log(p1);
