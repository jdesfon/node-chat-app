var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it ('should generate correct message object', () => {
            let from = 'me';
            let text = 'hello world';
            let message = generateMessage(from, text);

            expect(typeof message.createdAt).toBe('number');
            expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
  it ('should generate correct location object', () => {
    let from = 'jm';
    let lat = 1;
    let lng = 2;
    let url = `https://www.google.com/maps?q=1,2`;
    let locationMessage = generateLocationMessage(from, lat, lng);

    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage).toMatchObject({from, url});
  });
});
