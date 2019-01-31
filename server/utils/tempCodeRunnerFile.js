describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var response = generateMessage('user', 'Find me');

        expect(response.from).toBe('user');
        expect(response.text).toBe('Find me');
        expect(response.createdAt).toBeA('number');
    });
});