const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// escrevendo
const pessoas = [
    { nome: 'igor', idade: 18 },
    { nome: 'maria' },
    { nome: 'mudei' },
    { nome: null },
]

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json)

// lendo

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(element => {
        console.log(element)
    });
}

lerArquivo(caminhoArquivo)