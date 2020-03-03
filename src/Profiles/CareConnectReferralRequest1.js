const FHIRServer = require('../..')

let ReferralRequest = require(FHIRServer.resources.STU3.ReferralRequest)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectReferralRequestMethod1 = require('../../src/Extensions/ExtensionCareConnectReferralRequestMethod1.js')
let ExtensionCareConnectSourceOfReferral1 = require('../../src/Extensions/ExtensionCareConnectSourceOfReferral1.js')

class CareConnectReferralRequest1 extends ReferralRequest {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-ReferralRequest-1'
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

  set referralRequestMethod (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ReferralRequestMethod-1') {
      throw new Error('Incorrect profile URL for referralRequestMethod')
    }
    if (!(value instanceof ExtensionCareConnectReferralRequestMethod1)) {
      value = new ExtensionCareConnectReferralRequestMethod1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get referralRequestMethod () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ReferralRequestMethod-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectReferralRequestMethod1)) {
        ext = new ExtensionCareConnectReferralRequestMethod1(ext.toJSON())
        this.referralRequestMethod = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ReferralRequestMethod-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectReferralRequestMethod1()
      this.referralRequestMethod = retObject
      return [retObject]
    }
    return retObject
  }
  set sourceOfReferral (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-SourceOfReferral-1') {
      throw new Error('Incorrect profile URL for sourceOfReferral')
    }
    if (!(value instanceof ExtensionCareConnectSourceOfReferral1)) {
      value = new ExtensionCareConnectSourceOfReferral1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get sourceOfReferral () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-SourceOfReferral-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectSourceOfReferral1)) {
        ext = new ExtensionCareConnectSourceOfReferral1(ext.toJSON())
        this.sourceOfReferral = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-SourceOfReferral-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectSourceOfReferral1()
      this.sourceOfReferral = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectReferralRequest1
