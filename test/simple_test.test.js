const { assert } = require('chai');

describe('SampleTest ::: SampleUser', () => {
    describe('Field [name]: ', () => {
        context('When name is sent with a text value', () => {
            it('should be a string', () => {
                const USER = { name: 'Steve' };

                assert.typeOf(USER.name, 'string', 'the name is a string');
           });
        });
    });
});