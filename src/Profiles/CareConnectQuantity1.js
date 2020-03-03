const FHIRServer = require('../..')

let Quantity = require(FHIRServer.resources.STU3.Quantity)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectValueApproximation1 = require('../../src/Extensions/ExtensionCareConnectValueApproximation1.js')

class CareConnectQuantity1 extends Quantity {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Quantity-1'
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

  set valueApproximation (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ValueApproximation-1') {
      throw new Error('Incorrect profile URL for valueApproximation')
    }
    if (!(value instanceof ExtensionCareConnectValueApproximation1)) {
      value = new ExtensionCareConnectValueApproximation1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get valueApproximation () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ValueApproximation-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectValueApproximation1)) {
        ext = new ExtensionCareConnectValueApproximation1(ext.toJSON())
        this.valueApproximation = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ValueApproximation-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectValueApproximation1()
      this.valueApproximation = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectQuantity1
