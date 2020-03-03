// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectBookingOrganisation1 = require('../../../src/Extensions/ExtensionCareConnectBookingOrganisation1.js')

describe('Care Connect Extension ExtensionCareConnectBookingOrganisation1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectBookingOrganisation1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectBookingOrganisation1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-BookingOrganisation-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Reference', function () {
      let ext = new ExtensionCareConnectBookingOrganisation1()
      ext.reference = { 'reference': 'some reference' }
      let rf = ext.reference
      expect(rf.reference).toBe('some reference')
    })
  })
})