const nomes = ['igor', 'a', 'b', 'c', 'd', 'e']

const removidos = nomes.splice(-2, 2)

console.log(nomes, removidos)

const adicionando = nomes.splice(3, 0, 'novo', 'novo2')
console.log(nomes)

// pop
const pop = nomes.splice(-1, 1)
// shift
const shift = nomes.splice(0, 1)
// push
const push = nomes.splice(nomes.length, 0, 'Igor')
// unshift 
const unshift = nomes.splice(0, 0, 'Igor')