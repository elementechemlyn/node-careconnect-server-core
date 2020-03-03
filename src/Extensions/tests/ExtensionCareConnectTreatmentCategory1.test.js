// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectTreatmentCategory1 = require('../../../src/Extensions/ExtensionCareConnectTreatmentCategory1.js')

describe('Care Connect Extension ExtensionCareConnectTreatmentCategory1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectTreatmentCategory1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectTreatmentCategory1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-TreatmentCategory-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Codeableconcept', function () {
      let ext = new ExtensionCareConnectTreatmentCategory1()
      if (!ext.needsSnomed() && ext.hasValueSet()) {
        ext.codeableConcept = '1'
        let cc = ext.codeableConcept
        expect(cc.code).toBe('1')
        expect(cc.display).toBe('Exempt from payment - subject to reciprocal health agreement')
      } else if (ext.needsSnomed() && ext.hasValueSet()) {
        ext.codeableConcept = { 'code': '1', 'display': 'some display' , 'system': 'http://snomed.info/sct' }
        let cc = ext.codeableConcept
        expect(cc.code).toBe('1')
        expect(cc.display).toBe('some display')
      } else { // Has no valueset
        ext.codeableConcept = { 'code': 'somecode', 'display': 'some display' , 'system': 'somesystem' }
        let cc = ext.codeableConcept
        expect(cc.code).toBe('somecode')
        expect(cc.display).toBe('some display')
      }
    })
  })
})