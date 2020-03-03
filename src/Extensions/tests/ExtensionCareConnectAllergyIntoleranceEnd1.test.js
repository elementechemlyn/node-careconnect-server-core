// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectAllergyIntoleranceEnd1 = require('../../../src/Extensions/ExtensionCareConnectAllergyIntoleranceEnd1.js')

describe('Care Connect Extension ExtensionCareConnectAllergyIntoleranceEnd1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectAllergyIntoleranceEnd1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectAllergyIntoleranceEnd1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AllergyIntoleranceEnd-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set endDate', function () {
      let ext = new ExtensionCareConnectAllergyIntoleranceEnd1()
      // datetime
      ext.endDate = 'foobar'
    })
    it('Get/Set reasonEnded', function () {
      let ext = new ExtensionCareConnectAllergyIntoleranceEnd1()
      // string
      ext.reasonEnded = 'foobar'
    })
  })
})
