function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    })
}

const promisses = [
    wait('promisse 1', 5000),
    wait('promisse 2', 4000),
    wait('promisse 3', 2000),
    wait('promisse 4', 3000),
]

// espera todas as promisses 
Promise.all(promisses)
    .then(valor => {
        console.log(valor)
    })
    .catch(err => {
        console.log(err)
    })

// a primeira promisse vai ser retornada primeiro
Promise.race(promisses)
    .then(value => {
        console.log(value)
    })

function donwloadPage() {
    const inCache = false

    if (inCache) {
        return Promise.resolve('Page    in cache') // cai no then
        return Promise.reject('Page in cache') // cai no catch
    } else {
        return wait('Downloading page', 5000)
    }
}

donwloadPage()
    .then(value => {
        console.log(value)
    })
    .catch(err => {
        console.log(err)
    })