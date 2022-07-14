// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     })
// }

document.addEventListener('click', e => {
    const target = e.target;
    const tag = target.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(target);
    }
});

async function carregaPagina(el) {
    
    const href = el.getAttribute('href')
    
    const objConfig = {
        method: 'GET',
        url: href,
    }
    try {
        const response = await fetch(href)
        if (response.status !== 200) throw new Error(response.statusText)
        const html = await response.text()
        carregaResultado(html)
    } catch (error) {
        console.log(error)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

fetch('pagina2.html')
    .then(response => {
        if (response.status !== 200) {
            console.log(`Erro: ${response.status}`)
            return
        }
        return response.text()
    })
    .then(text => {
        console.log(text)
    })
    .catch(error => {
        console.log(error)
    })