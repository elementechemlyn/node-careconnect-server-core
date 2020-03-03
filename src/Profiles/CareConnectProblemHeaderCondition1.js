const FHIRServer = require('../..')

let Condition = require(FHIRServer.resources.STU3.Condition)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectActualProblem1 = require('../../src/Extensions/ExtensionCareConnectActualProblem1.js')
let ExtensionCareConnectRelatedProblemHeader1 = require('../../src/Extensions/ExtensionCareConnectRelatedProblemHeader1.js')
let ExtensionCareConnectProblemSignificance1 = require('../../src/Extensions/ExtensionCareConnectProblemSignificance1.js')
let ExtensionCareConnectRelatedClinicalContent1 = require('../../src/Extensions/ExtensionCareConnectRelatedClinicalContent1.js')

class CareConnectProblemHeaderCondition1 extends Condition {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-ProblemHeader-Condition-1'
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

  set actualProblem (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ActualProblem-1') {
      throw new Error('Incorrect profile URL for actualProblem')
    }
    if (!(value instanceof ExtensionCareConnectActualProblem1)) {
      value = new ExtensionCareConnectActualProblem1(value.toJSON())
    }
    this.addExtension(value)
  }

  get actualProblem () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ActualProblem-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectActualProblem1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectActualProblem1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ActualProblem-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectActualProblem1()
      this.actualProblem = retObject
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
    this.addExtension(value)
  }

  get relatedProblemHeader () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedProblemHeader-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectRelatedProblemHeader1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectRelatedProblemHeader1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedProblemHeader-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectRelatedProblemHeader1()
      this.relatedProblemHeader = retObject
      return [retObject]
    }
    return retObject
  }
  set problemSignificance (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ProblemSignificance-1') {
      throw new Error('Incorrect profile URL for problemSignificance')
    }
    if (!(value instanceof ExtensionCareConnectProblemSignificance1)) {
      value = new ExtensionCareConnectProblemSignificance1(value.toJSON())
    }
    this.addExtension(value)
  }

  get problemSignificance () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ProblemSignificance-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectProblemSignificance1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectProblemSignificance1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ProblemSignificance-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectProblemSignificance1()
      this.problemSignificance = retObject
      return [retObject]
    }
    return retObject
  }
  set relatedClinicalContent (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedClinicalContent-1') {
      throw new Error('Incorrect profile URL for relatedClinicalContent')
    }
    if (!(value instanceof ExtensionCareConnectRelatedClinicalContent1)) {
      value = new ExtensionCareConnectRelatedClinicalContent1(value.toJSON())
    }
    this.addExtension(value)
  }

  get relatedClinicalContent () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedClinicalContent-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectRelatedClinicalContent1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectRelatedClinicalContent1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-RelatedClinicalContent-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectRelatedClinicalContent1()
      this.relatedClinicalContent = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectProblemHeaderCondition1
