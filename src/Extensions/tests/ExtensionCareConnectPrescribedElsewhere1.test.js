// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectPrescribedElsewhere1 = require('../../../src/Extensions/ExtensionCareConnectPrescribedElsewhere1.js')

describe('Care Connect Extension ExtensionCareConnectPrescribedElsewhere1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectPrescribedElsewhere1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectPrescribedElsewhere1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-PrescribedElsewhere-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Codeableconcept', function () {
      let ext = new ExtensionCareConnectPrescribedElsewhere1()
      if (!ext.needsSnomed() && ext.hasValueSet()) {
        ext.codeableConcept = 'out-of-hours'
        let cc = ext.codeableConcept
        expect(cc.code).toBe('out-of-hours')
        expect(cc.display).toBe('Out of Hours')
      } else if (ext.needsSnomed() && ext.hasValueSet()) {
        ext.codeableConcept = { 'code': 'out-of-hours', 'display': 'some display' , 'system': 'http://snomed.info/sct' }
        let cc = ext.codeableConcept
        expect(cc.code).toBe('out-of-hours')
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
