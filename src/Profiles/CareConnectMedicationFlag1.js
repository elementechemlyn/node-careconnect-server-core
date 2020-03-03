const FHIRServer = require('../..')

let Flag = require(FHIRServer.resources.STU3.Flag)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectMedicationFlagAssociation1 = require('../../src/Extensions/ExtensionCareConnectMedicationFlagAssociation1.js')

class CareConnectMedicationFlag1 extends Flag {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Medication-Flag-1'
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

  set medication (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MedicationFlagAssociation-1') {
      throw new Error('Incorrect profile URL for medication')
    }
    if (!(value instanceof ExtensionCareConnectMedicationFlagAssociation1)) {
      value = new ExtensionCareConnectMedicationFlagAssociation1(value.toJSON())
    }
    this.addExtension(value)
  }

  get medication () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MedicationFlagAssociation-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectMedicationFlagAssociation1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectMedicationFlagAssociation1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MedicationFlagAssociation-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectMedicationFlagAssociation1()
      this.medication = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectMedicationFlag1
