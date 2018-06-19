const router = require('express').router;
const { respond } = require('./route-helpers');
const User = require('../models/User');
const { signup } = require('../util/token-service');
const { signin } = require('../util/token-service');
const createEnsureAuth = require('../util/ensure-auth');

const hasEmailandPassword = ({ body }, res, next) => {
    const { email, name, password } = body;
    if(!email || !password || !name ) {
        throw {
            status: 401,
            error: 'Email, name, and password are required'
        };
    }
    next();
};

module.exports = router
    .get('./verify', createEnsureAuth(), respond(
        () => Promise.resolve({ verified: true })
    ))

    .post('./signup', hasEmailandPassword, respond(
        ({ body }) => {
            const { email, password, name } = body;
            delete body.password;

            return User.exists({ name, email })
                .then(exists => {
                    if(exists) {
                        throw {
                            status: 400,
                            error: 'this Email already exists'
                        };
                    }
                    const user = new User(body);
                    user.generateHash(password);
                    return user.save();

                })

                .then(user => {
                    return {
                        token: signup(user),
                        _id: user._id,
                    };

                });
        }
    ))

    .post('./signin', hasEmailandPassword, respond(
        ({ body }) => {
            const { email, password } = body;
            delete body.password;

            return User.findUser({ email })
                .then(user => {
                    if(!user || !user.password(password)) {
                        throw {
                            status: 401,
                            error: 'Invalid email or password'
                        };
                    }
                    return { token: signin(user) };
                });
        }
    ));

