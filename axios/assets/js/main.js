fetch('pessoas.json')
    .then(response => response.json() )
    .then(json => carregaElementos(json))
// axios('pessoas.json')
//     .then(resposta => console.log(resposta))

function carregaElementos(json) {
    const table = document.createElement('table')

    for(let pessoa of json) {
        const tr = document.createElement('tr')

        let tdNome = document.createElement('td')
        tdNome.innerHTML = pessoa.nome
        tr.appendChild(tdNome)

        let tdidade = document.createElement('td')
        tdidade.innerHTML = pessoa.idade
        tr.appendChild(tdidade)

        tdsal = document.createElement('td')
        tdsal.innerHTML = pessoa.salario
        tr.appendChild(tdsal)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')

    resultado.appendChild(table)
}