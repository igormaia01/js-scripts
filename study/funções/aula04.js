//escopo léxico
const nome = 'igor'

function falaNome(){
    const nome = 'igor diferente' // primeiro procura no escopo local, se não encontrar, procura no escopo global
    console.log(nome)
}

function utilizaFalaNome(){
    const nome = 'isso aqui não interfere'
    falaNome()
}

utilizaFalaNome()