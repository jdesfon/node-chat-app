const expect = require('expect');

const {
    Users
} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node fans'
        }, {
            id: '2',
            name: 'Jean',
            room: 'React fans'
        }, {
            id: '3',
            name: 'Sandra',
            room: 'Node fans'
        }, {
            id: '4',
            name: 'Zoe',
            room: 'Node fans'
        }];
    });

    it('should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'Node Fans'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Node fans', () => {
        var userList = users.getUserList(('Node fans'));

        expect(userList).toEqual(['Mike', 'Sandra', 'Zoe']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(3);
    });

    it('should not remove user', () => {
        var userId = '18';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy()
        expect(users.users.length).toBe(4);
    });

    it('should find user', () => {
        var userId = '1';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });
});