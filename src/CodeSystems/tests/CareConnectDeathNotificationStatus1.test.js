// This file was auto generated

const codeSystem = require('../../../src/CodeSystems/CareConnectDeathNotificationStatus1.js')

describe('Care Connect CodeSystem CareConnectDeathNotificationStatus1', function () {
  describe('validateCode function', function () {
    it('code is invalid', function () {
      let result = codeSystem.validateCode('foo', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      expect(resultBool).toBe(false)
    })
    it('code is valid, display is invalid', function () {
      let result = codeSystem.validateCode('1', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(false)
      expect(resultDisplay).toBe('Informal - death notice received via an update from a local NHS Organisation such as GP or Trust')
    })
    it('code and display are valid', function () {
      let result = codeSystem.validateCode('1', 'Informal - death notice received via an update from a local NHS Organisation such as GP or Trust')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(true)
      expect(resultDisplay).toBe('Informal - death notice received via an update from a local NHS Organisation such as GP or Trust')
    })
  })
  describe('lookup function', function () {
    it('code is invalid', function () {
      let result = codeSystem.lookup('foo')
      expect(result.issue[0].severity).toBe('error')
      expect(result.issue[0].details.text).toBe('Code foo not found')
    })
    it('code is valid', function () {
      let result = codeSystem.lookup('1')
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultDisplay).toBe('Informal - death notice received via an update from a local NHS Organisation such as GP or Trust')
    })
  })
})
