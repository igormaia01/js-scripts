const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosEmDobro = numeros.map(valor =>  valor * 2);

console.log(numerosEmDobro);

const pessoas = [
    { nome: 'Pedro', idade: 20 },
    { nome: 'João', idade: 10 },
    { nome: 'Paula', idade: 12 },
    { nome: 'Artur', idade: 89 }
]   

const nomes = pessoas.map(pessoa => pessoa.nome);
const idade = pessoas.map(pessoa => pessoa.idade);
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }));

console.log(nomes, idade, idades)

const comIds = pessoas.map((pessoa, indice) => ({...pessoa, id: indice}));

console.log(comIds)