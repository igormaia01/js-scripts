// funções definidas com a palavra function tem uma 
// variavel chamada arguments que recebe os parâmetros da função
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}

funcao(1 , 2, 4, 5, 6, 7, 8, 9, 10);

function soma(a, b = 10, c = 2) {
    console.log(a + b + c);
}

soma(2, undefined, 1); //somente undefined pode ser passado como segundo parâmetro para assumir valor de b

function desestruturacao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

desestruturacao({ nome: 'João', sobrenome: 'Silva', idade: 20 });

function desestruturacaoArray([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}

desestruturacaoArray(['João', 'Silva', 20]);

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === 'x') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};

conta('-', 0, 1, 2, 3);