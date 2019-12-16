module.exports = (req, res, next) => {
    res.locals.author = {
        nombre: 'Sebastian Fuentes',
        correo: 'bastienff@gmail.com'
    };
    next();
};