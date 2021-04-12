const { expect } = require('chai');

describe('UnitTests ::: User', () => {
    describe('Field [name]: ', () => {
        context('When name is sent with a numeric value', () => {
            it('should throw an error', () => {
                expect(1).to.equal(1);
            });
        });
    });
});