// IIFE function -> Immediately Invoked Function Expression
const nome = 'qualquer coisa';

// está função não participa do escopo global
(function(idade, peso){
    console.log(idade, peso)
    const nome = 'João';
    console.log(nome)
})(18, 20);

console.log(nome)