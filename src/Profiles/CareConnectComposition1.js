const FHIRServer = require('../..')

let Composition = require(FHIRServer.resources.STU3.Composition)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectCareSettingType1 = require('../../src/Extensions/ExtensionCareConnectCareSettingType1.js')

class CareConnectComposition1 extends Composition {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Composition-1'
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

  set careSettingTypeExtension (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-CareSettingType-1') {
      throw new Error('Incorrect profile URL for careSettingTypeExtension')
    }
    if (!(value instanceof ExtensionCareConnectCareSettingType1)) {
      value = new ExtensionCareConnectCareSettingType1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get careSettingTypeExtension () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-CareSettingType-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectCareSettingType1)) {
        ext = new ExtensionCareConnectCareSettingType1(ext.toJSON())
        this.careSettingTypeExtension = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-CareSettingType-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectCareSettingType1()
      this.careSettingTypeExtension = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectComposition1
