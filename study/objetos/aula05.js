/*
    O JavaScript é baseado em protótipos, ou seja, cada objeto possui um protótipo,

    O protótipo é um objeto que é copiado para cada novo objeto criado.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const p1 = new Pessoa('João', 'Silva')
const p2 = new Pessoa('João', 'Silva')


console.log(p1.nomeCompleto())
console.log(p2.nomeCompleto())
