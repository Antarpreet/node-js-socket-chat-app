[{
    id: '',
    name: 'Andrew',
    room: 'Good Food'
}]

const _ = require('lodash');
class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    
    removeUser (id) {
        var user = this.getUser(id);

        if(user) {
            this.users = this.users.filter(user => user.id !== id);
        }

        return user;
    }
    
    getUser (id) {
        return this.users.find(user => user.id === id);
    }

    getUserByNameAndRoom (name, room) {
        return this.users.find(user => user.name === name && user.room === room);
    }
    
    getUserList (room) {
        var users = this.users.filter(user => user.room === room);
        var namesArray = users.map(user => user.name);

        return namesArray;
    }

    getRooms () {
        let arr = _.uniqBy(this.users, (e) => {
            e.room
        });
        return arr.map(item => item.room);
    }
}

module.exports = {
    Users
}