const soma = require('./mod2')
const salve = require('../A/B/C/D/test')
const path = require('path')

console.log(soma(1, 2));
console.log(salve);
console.log(__filename)
console.log(__dirname)
console.log(path.resolve(__dirname, '..', 'A', 'B', 'C', 'D', 'test.js'))