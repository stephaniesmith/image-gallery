const { assert } = require('chai');
// const { Types } = require('mongoose');
// const { getErrors } = require('./helpers');
const Album = require('../../lib/models/Album');

describe('Album model', () => {
    
    it('valid good model', () => {
        const data = {
            title: 'Dirty Computer',
            description: 'The most awesome',
            posterImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/DirtyComputer.png/220px-DirtyComputer.png'
        };

        const album = new Album(data);
        data._id = album._id;
        assert.deepEqual(album.toJSON(), data);
        assert.isUndefined(album.validateSync());
    });

});