const FHIRServer = require('../..')

let FamilyMemberHistory = require(FHIRServer.resources.STU3.FamilyMemberHistory)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectRecorder1 = require('../../src/Extensions/ExtensionCareConnectRecorder1.js')
let Encounter = require(FHIRServer.resources.STU3.Extension)

class CareConnectFamilyMemberHistory1 extends FamilyMemberHistory {
  constructor (opt) {
    super(opt)
    if (opt) {
      delete opt.resourceType // resourceType is read only on super
      this.manufacture = false // Don't ake empty objects if we don't ahve them
    } else {
      this.manufacture = true // We're an empty "factory" object
    }
    Object.assign(this, opt)
    this.meta = new Meta()
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-FamilyMemberHistory-1'
  }

  addExtension (extension) {
    if (this.extension) {
      this.__data.extension.unshift(extension)
    } else {
      this.__data.extension = [extension]
    }
  }

  addReplaceExtension (extension) {
    if (this.extension) {
      const index = this.extension.findIndex(ext => ext.url === extension.url)
      if (index === -1) {
        this.__data.extension.unshift(extension)
      } else {
        this.__data.extension[index] = extension
      }
    } else {
      this.__data.extension = [extension]
    }
  }

  set recorder (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-Recorder-1') {
      throw new Error('Incorrect profile URL for recorder')
    }
    if (!(value instanceof ExtensionCareConnectRecorder1)) {
      value = new ExtensionCareConnectRecorder1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get recorder () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-Recorder-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectRecorder1)) {
        ext = new ExtensionCareConnectRecorder1(ext.toJSON())
        this.recorder = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-Recorder-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectRecorder1()
      this.recorder = retObject
      return [retObject]
    }
    return retObject
  }
  set encounter (value) {
    if (value.url !== 'http://hl7.org/fhir/StructureDefinition/encounter-associatedEncounter') {
      throw new Error('Incorrect profile URL for encounter')
    }
    if (!(value instanceof Encounter)) {
      value = new Encounter(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get encounter () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/encounter-associatedEncounter')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof Encounter)) {
        ext = new Encounter(ext.toJSON())
        this.encounter = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/encounter-associatedEncounter')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Encounter()
      this.encounter = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectFamilyMemberHistory1
