const expect = require('expect')
const {Users} = require('./users')



describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Dave',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Jen',
      room: 'Node Course'
    }]
  })


  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Barry',
      room: 'PC Master Race'
    }
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  })

  it('should remove user', () => {
    //var users = new Users();
    var user = users.removeUser('1')
    expect(user.name).toEqual('Mike')
  })

  it('should not remove user', () => {
    var user = users.removeUser('a')
    expect(user).toEqual(undefined)
  })

  it('should find user', () => {
    var user = users.getUser('1');
    expect(user.name).toBe('Mike')
  })

  it('should not find user', () => {
    var user = users.getUser('44');
    expect(user).toNotExist();
  })


  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Jen'])
  })

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Dave'])
  })
})
