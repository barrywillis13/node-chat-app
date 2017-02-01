var expect = require('expect')

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'TesterDude'
    var text = 'I Is Testings!'
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Barry'
    var url = 'https://www.google.com/maps?q=1,1'
    var locationMessage = generateLocationMessage(from,1,1)

    expect(locationMessage.from).toBe('Barry');
    expect(locationMessage).toInclude({from, url});
  })
})
