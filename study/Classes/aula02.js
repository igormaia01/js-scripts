const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(value) {
        console.log('set')
        if(typeof value != 'numer') return;
        if(valor>= 100 || valor <= 0) return;
        this[_velocidade] = value
    }

    get velocidade() {
        console.log('get')
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}
const palio = new Carro('Palio')
palio.velocidade = 10
console.log(palio.velocidade)