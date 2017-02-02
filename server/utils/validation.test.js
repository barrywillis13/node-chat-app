const expect = require('expect');
const {isRealString} = require('./validation')
//isRealString

describe('isRealString', () => {
  it('should reject non-string values', () => {

    expect(isRealString(123)).toBe(false);
  })
  it('should reject string with only spaces', () => {

    expect(isRealString(' wer ')).toBe(true);
  })
  it('should allow string with non-space characters', () => {
    expect(isRealString('  ')).toBe(false);
  })
})
