const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non string value', () => {
        var num = 4;
        res = isRealString(num);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var spaces = '   ';
        res = isRealString(spaces);
        expect(res).toBe(false);
    });

    it('should reject allow string with no space characters', () => {
        var spaces = ' hello world   ';
        res = isRealString(spaces);
        expect(res).toBe(true);
    });
})