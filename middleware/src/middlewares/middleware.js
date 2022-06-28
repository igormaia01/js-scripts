module.exports = (req, res, next) => {
    console.log('passei no middlware global');
    next();
}