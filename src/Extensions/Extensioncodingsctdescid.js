// This code was autogenerated from BuildExtensions.py

const FHIRServer = require('../..')
const CareConnectBaseExtension = require('../BaseClasses/CareConnect-BaseExtension')

class Extensioncodingsctdescid extends CareConnectBaseExtension {
  constructor (opt) {
    super(opt)
    opt && delete opt.resourceType
    Object.assign(this, opt)
    this.url = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-coding-sctdescid'
  }
  set descriptionId (value) {
    // let max = 1
    // let min = 1
    let ext = new CareConnectBaseExtension()
    ext.url = 'descriptionId'
    ext.valueId = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get descriptionId () {
    let ext = this.__data.extension.find(e => e.url === 'descriptionId')
    return ext && ext.valueId
  }
  set descriptionDisplay (value) {
    // let max = 1
    // let min = 1
    let ext = new CareConnectBaseExtension()
    ext.url = 'descriptionDisplay'
    ext.valueString = value
    // TODO Check max/clear existing slice
    if (!this.__data.extension) {
      this.__data.extension = []
    }
    this.__data.extension.push(ext)
  }

  get descriptionDisplay () {
    let ext = this.__data.extension.find(e => e.url === 'descriptionDisplay')
    return ext && ext.valueString
  }
}

module.exports = Extensioncodingsctdescid
