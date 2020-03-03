const FHIRServer = require('../..')

let AllergyIntolerance = require(FHIRServer.resources.STU3.AllergyIntolerance)
let Meta = require(FHIRServer.resources.STU3.Meta)
let Encounter = require(FHIRServer.resources.STU3.Extension)
let ExtensionCareConnectAllergyIntoleranceEnd1 = require('../../src/Extensions/ExtensionCareConnectAllergyIntoleranceEnd1.js')
let ExtensionCareConnectEvidence1 = require('../../src/Extensions/ExtensionCareConnectEvidence1.js')

class CareConnectAllergyIntolerance1 extends AllergyIntolerance {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1'
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
  set allergyEnd (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AllergyIntoleranceEnd-1') {
      throw new Error('Incorrect profile URL for allergyEnd')
    }
    if (!(value instanceof ExtensionCareConnectAllergyIntoleranceEnd1)) {
      value = new ExtensionCareConnectAllergyIntoleranceEnd1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get allergyEnd () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AllergyIntoleranceEnd-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectAllergyIntoleranceEnd1)) {
        ext = new ExtensionCareConnectAllergyIntoleranceEnd1(ext.toJSON())
        this.allergyEnd = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AllergyIntoleranceEnd-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectAllergyIntoleranceEnd1()
      this.allergyEnd = retObject
      return [retObject]
    }
    return retObject
  }
  set evidence (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-Evidence-1') {
      throw new Error('Incorrect profile URL for evidence')
    }
    if (!(value instanceof ExtensionCareConnectEvidence1)) {
      value = new ExtensionCareConnectEvidence1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get evidence () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-Evidence-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectEvidence1)) {
        ext = new ExtensionCareConnectEvidence1(ext.toJSON())
        this.evidence = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-Evidence-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectEvidence1()
      this.evidence = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectAllergyIntolerance1
