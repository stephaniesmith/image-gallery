const Router = require('express').Router;
const router = Router();
const User = require('../models/User');
const { respond } = require('./route-helpers');
const { sign } = require('../util/token-service');
const createEnsureAuth = require('../util/ensure-auth');
const bodyParser = require('body-parser').json();

const hasEmailAndPassword = ({ body }, res, next) => {
    const { email, password } = body;
    if(!email || !password) {
        throw {
            status: 401,
            error: 'Email, name, and password required'
        };
    }
    next();
};

module.exports = router
    .get('/verify', createEnsureAuth(), respond(
        () => Promise.resolve({ verified: true })
    ))

    .post('/signup', bodyParser, hasEmailAndPassword, respond(
        ({ body }) => {
            const { name, email, password } = body;
            delete body.password;

            return User.exists({ name, email })
                .then(exists => {
                    if(exists) {
                        throw {
                            status: 400,
                            error: 'Email exists'
                        };
                    }

                    const user = new User(body);
                    user.generateHash(password);
                    return user.save();
                })
                .then(user => {
                    return {
                        token: sign(user),
                        _id: user._id,
                        roles: user.roles
                    };
                });
        }
    ))

    .post('/signin', bodyParser, hasEmailAndPassword, respond(
        ({ body }) => {
            const { email, password } = body;
            delete body.password;

            return User.findOne({ email })
                .then(user => {
                    if(!user || !user.comparePassword(password)) {
                        throw {
                            status: 401,
                            error: 'Invalid email or password'
                        };
                    }
                    return { token: sign(user) };
                });
        }
    ));