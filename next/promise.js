function aleatory(min, max) {
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    })
}

wait('Hello 1', aleatory(1, 5))
    .then(msg => {
        console.log(msg) 
        return wait('Hello 2', aleatory(1, 5))
            .then(msg => {
                console.log(msg)
                return wait('Hello 3', aleatory(1, 3))
                    .then(msg => {
                        console.log(msg)
                    })
            });
    })

console.log('first')


