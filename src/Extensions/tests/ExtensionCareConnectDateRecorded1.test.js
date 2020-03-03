// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectDateRecorded1 = require('../../../src/Extensions/ExtensionCareConnectDateRecorded1.js')

describe('Care Connect Extension ExtensionCareConnectDateRecorded1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectDateRecorded1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectDateRecorded1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DateRecorded-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Datetime', function () {
      let ext = new ExtensionCareConnectDateRecorded1()
      ext.datetime = 'some string'
      let dt = ext.datetime
      expect(dt).toBe('some string')
    })
  })
})
