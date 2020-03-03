// This file was auto generated

const valueSet = require('../../../src/ValueSets/CareConnectConditionEpisodeSnCT1.js')

describe('Care Connect Valueset CareConnectConditionEpisodeSnCT1', function () {
  describe('validateCode function', function () {
    it('system is invalid', function () {
      let result = valueSet.validateCode('foobar', 'foo', 'bar')
      expect(result).toBe(undefined)
    })
    it('code is invalid', function () {
      let result = valueSet.validateCode('http://snomed.info/sct', 'foo', 'bar')
      expect(result).toBe(undefined)
    })
    it('code is valid, display is invalid', function () {
      let result = valueSet.validateCode('http://snomed.info/sct', '255217005', 'bar')
      expect(result).toBe(undefined)
    })
    it('code and display are valid', function () {
      let result = valueSet.validateCode('http://snomed.info/sct', '255217005', 'First episode')
      expect(result).toBe(undefined)
    })
  })
  describe('expand function', function () {
  })
})
