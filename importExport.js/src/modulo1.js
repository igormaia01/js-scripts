const nome = 'Igor'
const sobrenome = 'Maia'
export const idade = 21

function soma(x, y) {
    return x + y
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

 // exportando as variáveis
export { nome, sobrenome as sobrenome1, soma }

export default  (x, y) => x * y