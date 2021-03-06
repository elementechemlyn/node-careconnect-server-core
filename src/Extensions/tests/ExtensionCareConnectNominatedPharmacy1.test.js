// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectNominatedPharmacy1 = require('../../../src/Extensions/ExtensionCareConnectNominatedPharmacy1.js')

describe('Care Connect Extension ExtensionCareConnectNominatedPharmacy1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectNominatedPharmacy1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectNominatedPharmacy1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NominatedPharmacy-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Reference', function () {
      let ext = new ExtensionCareConnectNominatedPharmacy1()
      ext.reference = { 'reference': 'some reference' }
      let rf = ext.reference
      expect(rf.reference).toBe('some reference')
    })
  })
})
