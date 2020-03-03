// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectAllergySeverity1 = require('../../../src/Extensions/ExtensionCareConnectAllergySeverity1.js')

describe('Care Connect Extension ExtensionCareConnectAllergySeverity1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectAllergySeverity1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectAllergySeverity1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AllergySeverity-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Codeableconcept', function () {
      let ext = new ExtensionCareConnectAllergySeverity1()
      if (!ext.needsSnomed() && ext.hasValueSet()) {
        ext.codeableConcept = 'snomed'
        let cc = ext.codeableConcept
        expect(cc.code).toBe('snomed')
        expect(cc.display).toBe('snomed')
      } else if (ext.needsSnomed() && ext.hasValueSet()) {
        ext.codeableConcept = { 'code': 'snomed', 'display': 'some display' , 'system': 'http://snomed.info/sct' }
        let cc = ext.codeableConcept
        expect(cc.code).toBe('snomed')
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