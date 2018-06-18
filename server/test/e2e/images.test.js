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

    let KittenTwo = {
        title: 'Kitten Two',
        description: 'Something cute!!!!!!!!!',
        url: 'http://www.domusfelium.co.uk/faith_kitten_blue_silver_8_weeks.jpg',
    };

    const janelle = {
        title: 'Kitten',
        description: 'Something cute',
        posterImage: 'http://www.domusfelium.co.uk/faith_kitten_blue_silver_8_weeks.jpg'
    };

    const someAlbum = {
        title: 'this is an album',
        description: 'album stuff',
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

    before(() => {
        return request.post('/api/albums')
            .send(someAlbum)
            .then(({ body }) => {
                someAlbum._id = body._id;
                KittenTwo.albumId = body._id;
            });
    });

    before(() => {
        return request.post('/api/images')
            .send(KittenTwo)
            .then(({ body }) => {
                KittenTwo = body;
                console.log('kittenTwo', KittenTwo);
            });
    });

    it('posts an image', () => {
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
                assert.deepEqual(body, [KittenTwo, KittenOne]);
            });
    });

    it('gets images by album id', () => {
        return request.get(`/api/images?albumId=${someAlbum._id}`)
            .then(({ body }) => {
                console.log('BODY!!!!', body);
                assert.deepEqual(body, [KittenTwo]);
            });
    });

});