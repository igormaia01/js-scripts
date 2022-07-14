class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() { 
        console.log(`${this.nome} está bebendo`)
    }
}

function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa2.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
}
const pessoa = new Pessoa('igor', 21);
const pessoa2 = new Pessoa2('joão', 20);

pessoa.falar()
pessoa2.falar()
