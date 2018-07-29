var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it ('should generate correct message object', () => {
            let from = 'me';
            let text = 'hello world';
            let message = generateMessage(from, text);

            expect(typeof message.createdAt).toBe('number');
            expect(message).toMatchObject({from, text});
    });
});