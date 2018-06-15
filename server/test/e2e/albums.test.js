const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Album E2E API', () => {

    before(() => dropCollection('albums'));

    let janelle = {
        title: 'Kitten',
        description: 'Something cute',
        posterImage: 'http://www.domusfelium.co.uk/faith_kitten_blue_silver_8_weeks.jpg'
    };

    it('posts an album', () => {
        return request.post('/api/albums')
            .send(janelle)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal( __v, 0);
                assert.deepEqual(body, {
                    ...janelle,
                    _id,
                    __v
                });
                janelle = body;
            });
    });

    it('gets all albums', () => {
        return request.get('/api/albums')
            .then(({ body }) => {
                assert.deepEqual(body, [janelle]);
            });
    });

});