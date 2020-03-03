// This code was autogenerated from BuildExtensions.py

const FHIRServer = require('../..')
const CareConnectBaseExtension = require('../BaseClasses/CareConnect-BaseExtension')

class ExtensionCareConnectRegistrationDetails1 extends CareConnectBaseExtension {
  constructor (opt) {
    super(opt)
    opt && delete opt.resourceType
    Object.assign(this, opt)
    this.url = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RegistrationDetails-1'
  }
  set registrationPeriod (value) {
    // let max = 1
    // let min = None
    let ext = new CareConnectBaseExtension()
    ext.url = 'registrationPeriod'
    ext.valuePeriod = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get registrationPeriod () {
    let ext = this.__data.extension.find(e => e.url === 'registrationPeriod')
    return ext && ext.valuePeriod
  }
  set registrationType (value) {
    // let max = 1
    // let min = None
    let ext = new CareConnectBaseExtension()
    ext.url = 'registrationType'
    ext.valueCodeableConcept = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get registrationType () {
    let ext = this.__data.extension.find(e => e.url === 'registrationType')
    return ext && ext.valueCodeableConcept
  }
  set preferredBranchSurgery (value) {
    // let max = 1
    // let min = None
    let ext = new CareConnectBaseExtension()
    ext.url = 'preferredBranchSurgery'
    ext.valueReference = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get preferredBranchSurgery () {
    let ext = this.__data.extension.find(e => e.url === 'preferredBranchSurgery')
    return ext && ext.valueReference
  }
}

module.exports = ExtensionCareConnectRegistrationDetails1