exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este e o valor da variavel local';
    next();
};

exports.checkCsrfError = (err, req, res) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};