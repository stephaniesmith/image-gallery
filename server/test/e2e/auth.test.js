const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Auth API', () => {
    before(() => dropCollection('users'));

    let token = null;

    beforeEach(() => {
        return request
            .post('/api/auth/signup')
            .send({
                name: 'Roger Ebert',
                email: 'rober@ebert.com',
                password: 'abc'
            })
            .then(({ body }) => {
                console.log('BODY!!!!!!!!', body);
                return token = body.token;
            });
    });

    it('signup', () => {
        assert.ok(token);
    });

    // it('signin', () => {
    //     return request
    //         .post('/auth/signin')
    //         .send({
    //             name: 'Another Name',
    //             email: 'another@name.com',
    //             password: 'xyz'
    //         })
    //         .then(({ body }) => {
    //             assert.ok(body.token);
    //         });
    // });

    // it('Gives 400 on signup of same email', () => {
    //     return request
    //         .post('/auth/signup')
    //         .send({
    //             name: 'Roger Ebert',
    //             company: 'rogerebert.com',
    //             email: 'rober@ebert.com',
    //             password: 'abc'
    //         })
    //         .then(res => {
    //             assert.equal(res.status, 400);
    //             assert.equal(res.body.error, 'Email exists');
    //         });
    // });

    // it('Gives 401 on non-existent email', () => {
    //     return request
    //         .post('/auth/signin')
    //         .send({
    //             email: 'bad@sue.com',
    //             password: 'abc'
    //         })
    //         .then(res => {
    //             assert.equal(res.status, 401);
    //             assert.equal(res.body.error, 'Invalid email or password');
    //         });
    // });

    // it('Gives 401 on bad password', () => {
    //     return request
    //         .post('/auth/signin')
    //         .send({
    //             email: 'rober@ebert.com',
    //             password: 'bad'
    //         })
    //         .then(res => {
    //             assert.equal(res.status, 401);
    //             assert.equal(res.body.error, 'Invalid email or password');
    //         });
    // });
});