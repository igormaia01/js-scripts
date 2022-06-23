const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Envier FORM</button>
    </form>`);
});

app.post('/', (req, res) => {
    res.send('Thanks bro!');
})

app.get('/contato', (req, res) => {
    res.send('Thanks bro!');
})

app.listen(3000, () => { 
    console.log('Acessa http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});