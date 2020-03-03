const FHIRServer = require('../..')

let List = require(FHIRServer.resources.STU3.List)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectClinicalSetting1 = require('../../src/Extensions/ExtensionCareConnectClinicalSetting1.js')
let ExtensionCareConnectListWarningCode1 = require('../../src/Extensions/ExtensionCareConnectListWarningCode1.js')
let ExtensionCareConnectRelatedProblemHeader1 = require('../../src/Extensions/ExtensionCareConnectRelatedProblemHeader1.js')

class CareConnectList1 extends List {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-List-1'
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
  set warningCode (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ListWarningCode-1') {
      throw new Error('Incorrect profile URL for warningCode')
    }
    if (!(value instanceof ExtensionCareConnectListWarningCode1)) {
      value = new ExtensionCareConnectListWarningCode1(value.toJSON())
    }
    this.addExtension(value)
  }

  get warningCode () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ListWarningCode-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectListWarningCode1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectListWarningCode1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ListWarningCode-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectListWarningCode1()
      this.warningCode = retObject
      return [retObject]
    }
    return retObject
  }
  set relatedProblemHeader (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedProblemHeader-1') {
      throw new Error('Incorrect profile URL for relatedProblemHeader')
    }
    if (!(value instanceof ExtensionCareConnectRelatedProblemHeader1)) {
      value = new ExtensionCareConnectRelatedProblemHeader1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get relatedProblemHeader () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedProblemHeader-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectRelatedProblemHeader1)) {
        ext = new ExtensionCareConnectRelatedProblemHeader1(ext.toJSON())
        this.relatedProblemHeader = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedProblemHeader-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectRelatedProblemHeader1()
      this.relatedProblemHeader = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectList1
