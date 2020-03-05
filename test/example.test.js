const assert = require('assert');
const service = require('../app/services/movePeople');
describe('Simple Service Test', () => {
 it('should return rudi', () => {
        assert.equal('rudi', service.hello('rudi'));
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});