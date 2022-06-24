exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Outro: <input type="text" name="outro">
    <button>Envier FORM</button>
    </form>`);
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de post');
}