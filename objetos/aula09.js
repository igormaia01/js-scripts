const falar = {
    falar() {
        console.log(`${this.nome} ${this.sobrenome}`);
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo`);
    }
}   

const beber = {
    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    }
}

const pessoaPrototype = { ...falar, ...beber, ...comer }; 

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
            enumerable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true,
        },
    })
}

const p1 = criaPessoa('João', 'Silva');

p1.comer()