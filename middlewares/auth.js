// Lo voy a usar cuando tenga una pagina de login

const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedtoken = jwt.verify(token, 'your-secret-key');
        req.userData = decodedtoken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed!' });
    };
};