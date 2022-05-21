function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== Number){
                throw new TypeError ('O valor deve ser um número');
            }
            estoque = valor;
        }
    })
}

const p1 = new Produto('camisa', 20, 3);
p1.estoque = '10';
console.log(p1.estoque)
