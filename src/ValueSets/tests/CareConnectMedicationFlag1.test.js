// This file was auto generated

const valueSet = require('../../../src/ValueSets/CareConnectMedicationFlag1.js')

describe('Care Connect Valueset CareConnectMedicationFlag1', function () {
  describe('validateCode function', function () {
    it('system is invalid', function () {
      let result = valueSet.validateCode('foobar', 'foo', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultMessage = result.parameter.find(prm => prm.name === 'message').valueString
      expect(resultBool).toBe(false)
      expect(resultMessage).toBe('System not part of valueset')
    })
    it('code is invalid', function () {
      let result = valueSet.validateCode('https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationFlag-1', 'foo', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      expect(resultBool).toBe(false)
    })
    it('code is valid, display is invalid', function () {
      let result = valueSet.validateCode('https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationFlag-1', 'do-not-discontinue', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(false)
      expect(resultDisplay).toBe('Do Not discontinue Medication')
    })
    it('code and display are valid', function () {
      let result = valueSet.validateCode('https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationFlag-1', 'do-not-discontinue', 'Do Not discontinue Medication')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(true)
      expect(resultDisplay).toBe('Do Not discontinue Medication')
    })
  })
  describe('expand function', function () {
  })
})
