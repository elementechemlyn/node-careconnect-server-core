// This file was auto generated

const valueSet = require('../../../src/ValueSets/CareConnectConditionRelationship1.js')

describe('Care Connect Valueset CareConnectConditionRelationship1', function () {
  describe('validateCode function', function () {
    it('system is invalid', function () {
      let result = valueSet.validateCode('foobar', 'foo', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultMessage = result.parameter.find(prm => prm.name === 'message').valueString
      expect(resultBool).toBe(false)
      expect(resultMessage).toBe('System not part of valueset')
    })
    it('code is invalid', function () {
      let result = valueSet.validateCode('https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionRelationship-1', 'foo', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      expect(resultBool).toBe(false)
    })
    it('code is valid, display is invalid', function () {
      let result = valueSet.validateCode('https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionRelationship-1', 'merge-combine', 'bar')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(false)
      expect(resultDisplay).toBe('Merge/Combine')
    })
    it('code and display are valid', function () {
      let result = valueSet.validateCode('https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionRelationship-1', 'merge-combine', 'Merge/Combine')
      let resultBool = result.parameter.find(prm => prm.name === 'result').valueBoolean
      let resultDisplay = result.parameter.find(prm => prm.name === 'display').valueString
      expect(resultBool).toBe(true)
      expect(resultDisplay).toBe('Merge/Combine')
    })
  })
  describe('expand function', function () {
  })
})
