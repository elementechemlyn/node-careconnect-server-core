const FHIRServer = require('../..')

let List = require(FHIRServer.resources.STU3.List)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectClinicalSetting1 = require('../../src/Extensions/ExtensionCareConnectClinicalSetting1.js')

class CareConnectProblemList1 extends List {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-ProblemList-1'
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

  set clinicalSetting (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ClinicalSetting-1') {
      throw new Error('Incorrect profile URL for clinicalSetting')
    }
    if (!(value instanceof ExtensionCareConnectClinicalSetting1)) {
      value = new ExtensionCareConnectClinicalSetting1(value.toJSON())
    }
    this.addExtension(value)
  }

  get clinicalSetting () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ClinicalSetting-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectClinicalSetting1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectClinicalSetting1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ClinicalSetting-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectClinicalSetting1()
      this.clinicalSetting = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectProblemList1
