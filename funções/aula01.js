// declarar função (function hoisting) = o motor do java script carrega a função antes de executá-la
falaOi();

function falaOi() {
    console.log('Oi');
}


// first-class object = objeto que pode ser passado como parâmetro para uma função
// function expression = função anônima

const souUmDado = function() {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// arrow function = função anônima
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando...');
    },
    falando: function() {
        console.log('Estou falando denovo');
    }
}

obj.falar()
obj.falando()