const { assert } = require('chai');
const User = require('../../lib/models/User');

describe('User model', () => {
    it('is a valid and good model', () => {
        const data = {
            name: 'Holly',
            email: 'hollyhobby@yahoo.com'
        };

        const holly = new User(data);
        data._id = holly._id;
        assert.deepEqual(holly.toJSON(), data);

    });
});