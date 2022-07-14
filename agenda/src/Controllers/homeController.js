exports.paginaInicial = (req, res) => {
    res.render('index', { 
        titulo: 'This is the title',
        numeros: [0, 1, 2, 3, 4 ,5 ,6 ,7 , 8]
    });
}

exports.trataPost = (req, res) => {
    res.send('Nova rota de post');
}