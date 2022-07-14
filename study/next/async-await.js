function wait(msg, time) {
    if (typeof msg !== 'string') {
        throw new TypeError('msg must be a string')
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    })
}

// console.log(wait('promisse 1', 5000).then(value => {
//     console.log(value)
//     return wait('promisse 2', 4000)
//         .then(value => {
//             console.log(value)
//             return wait('promisse 3', 2000)
//                 .then(value => {
//                     console.log(value)
//                     return wait('promisse 4', 3000)
//                         .then(value => {
//                             console.log(value)
//                         })
//                 })
//         })
// }))
async function exec() {
    try {
        const promisses = [
            wait('promisse 1', 5000),
            wait('promisse 2', 4000),
            wait('promisse 3', 2000),
            wait('promisse 4', 3000),
        ]
    
        // espera todas as promisses 
        const [fase1, fase2,fase3, fase4] = await Promise.all(promisses)
        console.log(fase1, fase2,fase3, fase4)
    } catch (error) {
        console.log(error)
    }
}

exec()

// pending -> pending -> pendente
// fulfilled -> fulfilled -> resolvida
// rejected -> rejected -> rejeitada
