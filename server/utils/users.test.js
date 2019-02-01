const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Adam',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Mike',
            room: 'Node Course'
        }];
    });
    
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: "123",
            name: "Andrew",
            room: "Good Food"
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(resUser).toEqual(user);
        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Adam', 'Mike']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');

        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var user = users.removeUser('4');

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var user = users.getUser('1');

        expect(user.name).toEqual('Adam');
        expect(user.room).toEqual('Node Course');
    });

    it('should not find a user', () => {
        var user = users.getUser('4');

        expect(user).toNotExist();
    });
});