// a soma do dobro de todos os pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros
.filter(valor => valor % 2===0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);