// Função construtura de objeto
// Construtora -> Pessoa -> (new Pessoa)

function Pessoa(nome, sobrenome) {
    const variavelInterna = 'variavel interna';
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    };
    this.nomeAoContrario = () =>{
        return this.sobrenome + ' ' + this.nome + variavelInterna;
    }
}

const pessoa1 =  new Pessoa('João', 'Silva');

console.log(pessoa1.nomeCompleto());
console.log(pessoa1.nomeAoContrario());
