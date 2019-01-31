const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var response = generateMessage('user', 'Find me');

        expect(response.from).toBe('user');
        expect(response.text).toBe('Find me');
        expect(response.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        var lat = 15;
        var long = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var response = generateLocationMessage('user', lat, long);

        expect(response.from).toBe('user');
        expect(response.url).toBe(url);
        expect(response.createdAt).toBeA('number');
    });
});