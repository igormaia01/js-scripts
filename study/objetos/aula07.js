// Produto -> aumento, desconto
// camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Object.setPrototypeOf(Camisa.prototype, Produto.prototype);

Camisa.prototype.aumento = function(percentual) {
    this.preco *= 1 + (percentual/100);
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new Error('O valor deve ser um número');
            }
            estoque = valor;
        }
    })
};
Object.setPrototypeOf(Caneca.prototype, Produto.prototype);

const produto = new Produto('Camisa', 100);
const camisa = new Camisa('Camisa', 23, 'azul');
const caneca = new Caneca('Caneca', 10, 'plastico', 10);
caneca.estoque = 20;
console.log(produto)
console.log(camisa)
console.log(caneca)
console.log(caneca.estoque)

