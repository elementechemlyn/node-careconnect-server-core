// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectEvidence1 = require('../../../src/Extensions/ExtensionCareConnectEvidence1.js')

describe('Care Connect Extension ExtensionCareConnectEvidence1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectEvidence1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectEvidence1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-Evidence-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Reference', function () {
      let ext = new ExtensionCareConnectEvidence1()
      ext.reference = { 'reference': 'some reference' }
      let rf = ext.reference
      expect(rf.reference).toBe('some reference')
    })
  })
})