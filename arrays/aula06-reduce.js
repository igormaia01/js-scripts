// reduce -> some todos os numeros e retorne
// filter -> retorna um array com os numeros pares
// map -> retorna um array com os numeros em dobro

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) return acumulador + valor
    return acumulador
}, 0);

console.log(total)

// retorna a pessoa mais velha 

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 65 },
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)