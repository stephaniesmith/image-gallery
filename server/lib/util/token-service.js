require('dotenv').config();
const jwt = require('jsonwebtoken');
const APP_SECRET = process.env.APP_SECRET || 'change this please';

module.exports = {
    signIn(user) {
        const payload = {
            id: user._id,
        };
        return jwt.signIn(payload, APP_SECRET);
    },
    verify(token) {
        return jwt.verify(token, APP_SECRET);
    }
};