const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('auth API', () => {
    before(() => dropCollection( 'users'));

    let token = null;

    beforeEach(() => {
        return request
            .post('/api/auth/signin')
            .send({
                name: 'Happy Heart',
                email: 'happyheart@yahoo.com',
                password: 'heartattack'
            })
            .then(({ body }) => {
                return token = body.token;
            });
    });

    it('signup', () => {
        assert.ok(token);
    });

});

