// This file was auto generated

const codeSystem = require('../../../src/CodeSystems/CareConnectMedicationFlag1.js')

describe('Care Connect CodeSystem CareConnectMedicationFlag1', function () {
  describe('validateCode function', function () {
    it('code is invalid', function () {
      let result = codeSystem.validateCode('foo', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      expect(resultBool).toBe(false)
    })
    it('code is valid, display is invalid', function () {
      let result = codeSystem.validateCode('do-not-discontinue', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(false)
      expect(resultDisplay).toBe('Do Not discontinue Medication')
    })
    it('code and display are valid', function () {
      let result = codeSystem.validateCode('do-not-discontinue', 'Do Not discontinue Medication')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(true)
      expect(resultDisplay).toBe('Do Not discontinue Medication')
    })
  })
  describe('lookup function', function () {
    it('code is invalid', function () {
      let result = codeSystem.lookup('foo')
      expect(result.issue[0].severity).toBe('error')
      expect(result.issue[0].details.text).toBe('Code foo not found')
    })
    it('code is valid', function () {
      let result = codeSystem.lookup('do-not-discontinue')
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultDisplay).toBe('Do Not discontinue Medication')
    })
  })
})
