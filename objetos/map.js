const pessoas = [
    { id: 3, nome: 'Pedro', idade: 20 },
    { id: 4, nome: 'João', idade: 10 },
    { id: 5, nome: 'Paula', idade: 12 },
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(3));

for(const pessoas of novasPessoas.keys()) {
    console.log(pessoas)
}

novasPessoas.delete(4);
console.log(novasPessoas);

