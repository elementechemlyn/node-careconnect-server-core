const FHIRServer = require('../..')

let Immunization = require(FHIRServer.resources.STU3.Immunization)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectParentPresent1 = require('../../src/Extensions/ExtensionCareConnectParentPresent1.js')
let ExtensionCareConnectDateRecorded1 = require('../../src/Extensions/ExtensionCareConnectDateRecorded1.js')
let ExtensionCareConnectVaccinationProcedure1 = require('../../src/Extensions/ExtensionCareConnectVaccinationProcedure1.js')

class CareConnectImmunization1 extends Immunization {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Immunization-1'
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

  set parentPresent (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ParentPresent-1') {
      throw new Error('Incorrect profile URL for parentPresent')
    }
    if (!(value instanceof ExtensionCareConnectParentPresent1)) {
      value = new ExtensionCareConnectParentPresent1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get parentPresent () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ParentPresent-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectParentPresent1)) {
        ext = new ExtensionCareConnectParentPresent1(ext.toJSON())
        this.parentPresent = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ParentPresent-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectParentPresent1()
      this.parentPresent = retObject
      return [retObject]
    }
    return retObject
  }
  set recordedDate (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DateRecorded-1') {
      throw new Error('Incorrect profile URL for recordedDate')
    }
    if (!(value instanceof ExtensionCareConnectDateRecorded1)) {
      value = new ExtensionCareConnectDateRecorded1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get recordedDate () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DateRecorded-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectDateRecorded1)) {
        ext = new ExtensionCareConnectDateRecorded1(ext.toJSON())
        this.recordedDate = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DateRecorded-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectDateRecorded1()
      this.recordedDate = retObject
      return [retObject]
    }
    return retObject
  }
  set vaccinationProcedure (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-VaccinationProcedure-1') {
      throw new Error('Incorrect profile URL for vaccinationProcedure')
    }
    if (!(value instanceof ExtensionCareConnectVaccinationProcedure1)) {
      value = new ExtensionCareConnectVaccinationProcedure1(value.toJSON())
    }
    this.addExtension(value)
  }

  get vaccinationProcedure () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-VaccinationProcedure-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectVaccinationProcedure1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectVaccinationProcedure1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-VaccinationProcedure-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectVaccinationProcedure1()
      this.vaccinationProcedure = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectImmunization1
