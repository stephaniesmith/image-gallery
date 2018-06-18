const { assert } = require('chai');
const User = require('../../lib/models/User');

describe('User model', () => {
    it('valid and good model', () => {
        const data = {
            name: 'Steven',
            email: 'steven@gemsrock.com'
        };

        const steven = new User(data);
        data._id = steven._id;
        assert.deepEqual(steven.toJSON(), data);
    });
});