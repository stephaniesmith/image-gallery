const { assert } = require('chai');
const User = require('../../lib/models/User');
const { getErrors } = require('./helpers');

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

    it('username is required', () => {
        const user = new User({});
        const errors = getErrors(user.validateSync(), 2);
        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.email.kind, 'required');
    });
});