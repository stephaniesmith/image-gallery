const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Album E2E API', () => {

    before(() => dropCollection('albums'));

    let janelle = {
        title: 'Dirty Computer',
        description: 'The most awesome',
        posterImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/DirtyComputer.png/220px-DirtyComputer.png'
    };

    it('posts an album', () => {
        return request.post('/albums')
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
        return request.get('/albums')
            .then(({ body }) => {
                assert.deepEqual(body, [janelle]);
            });
    });

});