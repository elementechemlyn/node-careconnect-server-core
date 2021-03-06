// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectAllergyIntoleranceEndDate1 = require('../../../src/Extensions/ExtensionCareConnectAllergyIntoleranceEndDate1.js')

describe('Care Connect Extension ExtensionCareConnectAllergyIntoleranceEndDate1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectAllergyIntoleranceEndDate1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectAllergyIntoleranceEndDate1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AllergyIntoleranceEndDate-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Datetime', function () {
      let ext = new ExtensionCareConnectAllergyIntoleranceEndDate1()
      ext.datetime = 'some string'
      let dt = ext.datetime
      expect(dt).toBe('some string')
    })
  })
})
