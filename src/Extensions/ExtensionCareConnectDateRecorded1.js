// This code was autogenerated from BuildExtensions.py

const FHIRServer = require('../..')
const CareConnectBaseExtension = require('../BaseClasses/CareConnect-BaseExtension')

class ExtensionCareConnectDateRecorded1 extends CareConnectBaseExtension {
  constructor (opt) {
    super(opt)
    opt && delete opt.resourceType
    Object.assign(this, opt)
    this.url = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DateRecorded-1'
  }
  set datetime (dt) {
    this.valueDateTime = dt
  }

  get datetime () {
    return this.valueDateTime
  }
}

module.exports = ExtensionCareConnectDateRecorded1
