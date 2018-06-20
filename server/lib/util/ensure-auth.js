const tokenService = require('./token-service');

module.exports = function getEnsureAuth() {
    return function ensureAuth(req, res, next) {
        const token = req.get('token');
        try {
            if(!token) return next({ status: 400, error: 'no token found' });

            const payload = tokenService.verify(token);
            req.user = payload;

            next();
        }

        catch(err) {
            next({ status: 401, error: 'Invalid Token' });
        }
    };
};