// This code was autogenerated from BuildExtensions.py

const ExtensionCareConnectMedicationStatusReason1 = require('../../../src/Extensions/ExtensionCareConnectMedicationStatusReason1.js')

describe('Care Connect Extension ExtensionCareConnectMedicationStatusReason1', function () {
  describe('Object constructor', function () {
    it('Can create object', function () {
      let ext = new ExtensionCareConnectMedicationStatusReason1()
      expect(ext).toBeInstanceOf(ExtensionCareConnectMedicationStatusReason1)
      expect(ext.url).toBe('https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MedicationStatusReason-1')
    })
  })
  describe('Object getters and setters', function () {
    it('Get/Set statusReason', function () {
      let ext = new ExtensionCareConnectMedicationStatusReason1()
      // codeableconcept
      ext.statusReason = { 'code': 'somecode', 'display': 'some display' , 'system': 'somesystem' }
      let value = ext.statusReason
      expect(value.code).toBe('somecode')
      expect(value.display).toBe('some display')
    })
    it('Get/Set statusChangeDate', function () {
      let ext = new ExtensionCareConnectMedicationStatusReason1()
      // datetime
      ext.statusChangeDate = 'foobar'
    })
  })
})
