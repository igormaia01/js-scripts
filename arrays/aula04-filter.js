// filter - retorna um novo array com os elementos que passaram no teste

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function callbackFilter(valor) {
    return valor > 10;
}

// filtra os numeros com base em uma condição
console.log(numeros.filter(numero => callbackFilter(numero)));
console.log(numeros.filter(numero => numero > 10));
console.log(numeros.filter((valor, indice, array) => {
    // console.log(valor, indice, array)
    return valor > 10;
}))

const pessoas  = [
    { nome: 'Pedro', idade: 20 },
    { nome: 'João', idade: 10 },
    { nome: 'Paula', idade: 12 },
    { nome: 'Artur', idade: 89 },
    { nome: 'Soter', idade: 55 },
    { nome: 'Luna', idade: 19 }
]

// pessoas com 5 letras ou mais no nome
const pessoasComNomeGrande = pessoas.filter(ObjPessoa => ObjPessoa.nome.length >= 5);
// pessoas com idade maior que 50
const pessoasMaiorDe50 = pessoas.filter(ObjPessoas => ObjPessoas.idade > 50);
// pessoas cujo nome termian com a
const pessoasQueTerminaComA = pessoas.filter(obj => obj.nome.endsWith('a'));
const pessoaQueIniciaComA = pessoas.filter(obj => obj.nome.startsWith('a'))

console.log(pessoasComNomeGrande)
console.log(pessoasMaiorDe50)
console.log(pessoasQueTerminaComA)






