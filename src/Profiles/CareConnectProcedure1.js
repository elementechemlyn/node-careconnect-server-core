const FHIRServer = require('../..')

let Procedure = require(FHIRServer.resources.STU3.Procedure)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectAnaestheticIssues1 = require('../../src/Extensions/ExtensionCareConnectAnaestheticIssues1.js')

class CareConnectProcedure1 extends Procedure {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Procedure-1'
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

  set anaestheticIssues (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AnaestheticIssues-1') {
      throw new Error('Incorrect profile URL for anaestheticIssues')
    }
    if (!(value instanceof ExtensionCareConnectAnaestheticIssues1)) {
      value = new ExtensionCareConnectAnaestheticIssues1(value.toJSON())
    }
    this.addExtension(value)
  }

  get anaestheticIssues () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AnaestheticIssues-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectAnaestheticIssues1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectAnaestheticIssues1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AnaestheticIssues-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectAnaestheticIssues1()
      this.anaestheticIssues = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectProcedure1
