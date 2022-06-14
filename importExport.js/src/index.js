import { nome as nomeDiferente , sobrenome1, idade, soma, Pessoa } from './modulo1'
import * as module from './modulo1'
import qualquerCoisa from './modulo1'

const nome = 'WHEREVER'

console.log(nome)
console.log(nomeDiferente, sobrenome1, idade, soma(2, 2))


const p1 = new Pessoa('Igor', 'Maia')
console.log(p1)

const p2 = new module.Pessoa('Igor', 'Maia')
console.log(p2)

console.log(qualquerCoisa(2, 5))
