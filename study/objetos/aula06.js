// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chaveB: 'C'
}

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objC.chaveA)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(percentual) {
    return this.preco *= 1 + (percentual/100)
}

const CamisaFalsa = {
    nome: 'falsa',
    preco: 20
}

Object.setPrototypeOf(CamisaFalsa, Produto.prototype)
const camisa = new Produto('Camisa', 100)

camisa.aumento(10)
console.log(camisa)
CamisaFalsa.aumento(10)
console.log(CamisaFalsa)

const camisaOriginal = Object.create(Produto.prototype, {
    nome: {
        value: 'Camisa Original',
        writable: true,
        enumerable: true,
        configurable: true
    },
    preco: {
        value: 100,
        writable: true,
        enumerable: true,
        configurable: true
    }
})

camisaOriginal.aumento(10)
console.log(camisaOriginal)