// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // não permite alterar o valor
        configurable: true // permite configurar o valor e deletar a chave
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: false,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        }
    })
}

const p1 = new Produto('camisa', 20, 3);
p1.estoque = 10;
console.log(p1)
console.log(Object.keys(p1))
