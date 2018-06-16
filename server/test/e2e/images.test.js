const { assert } = require('chai');
const request = require('./request');
const { dropCollection } = require('./db');

describe('Image E2E API', () => {

    before(() => dropCollection('images'));
    before(() => dropCollection('albums'));

    let KittenOne = {
        title: 'Kitten',
        description: 'Something cute',
        url: 'http://www.domusfelium.co.uk/faith_kitten_blue_silver_8_weeks.jpg',

    };

    let janelle = {
        title: 'Kitten',
        description: 'Something cute',
        posterImage: 'http://www.domusfelium.co.uk/faith_kitten_blue_silver_8_weeks.jpg'
    };

    before(() => {
        return request.post('/api/albums')
            .send(janelle)
            .then(({ body }) => {
                janelle._id = body._id;
                KittenOne.albumId = body._id;
            });
    });

    it('posts an image', () => {
        console.log('janelle', janelle);
        console.log('KittenOne', KittenOne);
        return request.post('/api/images')
            .send(KittenOne)
            .then(({ body }) => {
                const { _id, __v } = body;
                assert.ok(_id);
                assert.equal( __v, 0);
                assert.deepEqual(body, {
                    ...KittenOne,
                    _id,
                    __v
                });
                KittenOne = body;
            });
    });

    it('gets all images', () => {
        return request.get('/api/images')
            .then(({ body }) => {
                assert.deepEqual(body, [KittenOne]);
            });
    });

    // it('gets images by album id', () => {

    // });

});