const produto = { nome: 'Caneta Bic Preta', preco: 1.90, desconto: 0.05 }
const outraCoisa = { ...produto, outraChave: 'another one' }
const outraCoisa2 = Object.assign({}, produto, { outraChave: 'another two' })

console.log(produto)
console.log(outraCoisa)
console.log(outraCoisa2)

Object.defineProperty(produto, 'nome', {
    writable: false,
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.values(produto))
console.log(Object.entries(produto))

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}