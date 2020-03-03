// This file was auto generated

const codeSystem = require('../../../src/CodeSystems/CareConnectSourceOfAdmission1.js')

describe('Care Connect CodeSystem CareConnectSourceOfAdmission1', function () {
  describe('validateCode function', function () {
    it('code is invalid', function () {
      let result = codeSystem.validateCode('foo', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      expect(resultBool).toBe(false)
    })
    it('code is valid, display is invalid', function () {
      let result = codeSystem.validateCode('19', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(false)
      expect(resultDisplay).toBe('Usual place of residence unless listed below, for example, a private dwelling whether owner occupied or owned by Local Authority, housing association or other landlord. This includes wardened accommodation but not residential accommodation where health care is provided. It also includes Patients with no fixed abode.')
    })
    it('code and display are valid', function () {
      let result = codeSystem.validateCode('19', 'Usual place of residence unless listed below, for example, a private dwelling whether owner occupied or owned by Local Authority, housing association or other landlord. This includes wardened accommodation but not residential accommodation where health care is provided. It also includes Patients with no fixed abode.')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(true)
      expect(resultDisplay).toBe('Usual place of residence unless listed below, for example, a private dwelling whether owner occupied or owned by Local Authority, housing association or other landlord. This includes wardened accommodation but not residential accommodation where health care is provided. It also includes Patients with no fixed abode.')
    })
  })
  describe('lookup function', function () {
    it('code is invalid', function () {
      let result = codeSystem.lookup('foo')
      expect(result.issue[0].severity).toBe('error')
      expect(result.issue[0].details.text).toBe('Code foo not found')
    })
    it('code is valid', function () {
      let result = codeSystem.lookup('19')
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultDisplay).toBe('Usual place of residence unless listed below, for example, a private dwelling whether owner occupied or owned by Local Authority, housing association or other landlord. This includes wardened accommodation but not residential accommodation where health care is provided. It also includes Patients with no fixed abode.')
    })
  })
})
