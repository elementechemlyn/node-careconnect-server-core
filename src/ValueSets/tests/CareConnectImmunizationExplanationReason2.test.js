// This file was auto generated

const valueSet = require('../../../src/ValueSets/CareConnectImmunizationExplanationReason2.js')

describe('Care Connect Valueset CareConnectImmunizationExplanationReason2', function () {
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
      let result = valueSet.validateCode('http://snomed.info/sct', '171279008', 'bar')
      expect(result).toBe(undefined)
    })
    it('code and display are valid', function () {
      let result = valueSet.validateCode('http://snomed.info/sct', '171279008', 'Immunization due')
      expect(result).toBe(undefined)
    })
  })
  describe('expand function', function () {
  })
})
