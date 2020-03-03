// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectConditionEpisode1 = require('../../../src/Extensions/ExtensionCareConnectConditionEpisode1.js')

describe('Care Connect Extension ExtensionCareConnectConditionEpisode1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectConditionEpisode1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectConditionEpisode1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ConditionEpisode-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set Code', function () {
      let ext = new ExtensionCareConnectConditionEpisode1()
      ext.code = 'foo'
      let cd = ext.code
      expect(cd).toBe('foo')
    })
  })
})
