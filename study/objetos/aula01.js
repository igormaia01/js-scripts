// maneiras de criar objetos
const pessoa  = {
    nome: 'João',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP'
    }
}
console.log(pessoa['endereco']['cidade']) // utilizada para valores dinâmicos
console.log(pessoa.endereco.cidade)

const pessoa1 = new Object()

pessoa1.nome = 'João'
pessoa1.idade = 20
pessoa1.endereco = new Object()
pessoa1.endereco.logradouro = 'Rua ABC'
pessoa1.endereco.numero = 1000
pessoa1.endereco.bairro = 'Centro'
pessoa1.endereco.cidade = 'São Paulo'
pessoa1.endereco.uf = 'SP'

console.log(pessoa, pessoa1)

// funções uteis

delete pessoa1.idade // pode deletar atributos

pessoa1.falarNome = function() {
    console.log(`Meu nome é ${this.nome}`)
}
// funções dentro de objetos são métodos
pessoa1.falarNome()

for (chave in pessoa) {
    console.log(pessoa[chave])
}

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('igor', 'maia')
console.log(p1.nomeCompleto)

Object.freeze(pessoa1) // não permite alterar o objeto

pessoa1.nome = 'teste'
console.log(pessoa1.nome)