// This code was autogenerated from BuildExtensions.py

const FHIRServer = require('../..')
const CareConnectBaseExtension = require('../BaseClasses/CareConnect-BaseExtension')

class ExtensionCareConnectMedicationChangeSummary1 extends CareConnectBaseExtension {
  constructor (opt) {
    super(opt)
    opt && delete opt.resourceType
    Object.assign(this, opt)
    this.url = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MedicationChangeSummary-1'
  }
  set status (value) {
    // let max = 1
    // let min = None
    let ext = new CareConnectBaseExtension()
    ext.url = 'status'
    ext.valueCode = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get status () {
    let ext = this.__data.extension.find(e => e.url === 'status')
    return ext && ext.valueCode
  }
  set indicationForChange (value) {
    // let max = 1
    // let min = None
    let ext = new CareConnectBaseExtension()
    ext.url = 'indicationForChange'
    ext.valueCodeableConcept = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get indicationForChange () {
    let ext = this.__data.extension.find(e => e.url === 'indicationForChange')
    return ext && ext.valueCodeableConcept
  }
  set dateChanged (value) {
    // let max = 1
    // let min = None
    let ext = new CareConnectBaseExtension()
    ext.url = 'dateChanged'
    ext.valueDateTime = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get dateChanged () {
    let ext = this.__data.extension.find(e => e.url === 'dateChanged')
    return ext && ext.valueDateTime
  }
  set detailsOfAmendment (value) {
    // let max = 1
    // let min = None
    let ext = new CareConnectBaseExtension()
    ext.url = 'detailsOfAmendment'
    ext.valueString = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get detailsOfAmendment () {
    let ext = this.__data.extension.find(e => e.url === 'detailsOfAmendment')
    return ext && ext.valueString
  }
}

module.exports = ExtensionCareConnectMedicationChangeSummary1
