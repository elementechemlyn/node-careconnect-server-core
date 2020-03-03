// This code was autogenerated from BuildExtensions.py

const FHIRServer = require('../..')
const CareConnectBaseExtension = require('../BaseClasses/CareConnect-BaseExtension')

class ExtensionCareConnectMedicationQuantityText1 extends CareConnectBaseExtension {
  constructor (opt) {
    super(opt)
    opt && delete opt.resourceType
    Object.assign(this, opt)
    this.url = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MedicationQuantityText-1'
  }
  set string (st) {
    this.valueString = st
  }

  get string () {
    return this.valueString
  }
}

module.exports = ExtensionCareConnectMedicationQuantityText1