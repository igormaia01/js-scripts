//                0        1       2
const nomes = ['João', 'Maria', 'José'];

const nomesDiferente =  new Array('João', 'Maria', 'José');

const novo = [...nomes]
nomes.pop();

console.log(nomes, novo)

console.log(nomesDiferente.slice(1, -1))

const igor = 'igor de paulo maia';
console.log(igor)
const array = igor.split(' ');
console.log(array)
console.log(array.join(' '))