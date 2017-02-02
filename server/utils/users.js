[{
  id: '#asdfasf3234',
  name: 'Barry',
  room: 'Pc Gaming Master Race'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor() {
    this.users = []
  }

  addUser(id, name, room) {
    var user = {id, name, room}
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    var user;
    return user
  }
  getUser(id) {
    var user;
    return user
  }
  getUserList(room){
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users}


// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} years old`
//   }
//  }
//
//  var me = new Person('Barry', 30)
//  var description = me.getUserDescription();
// console.log(description)
