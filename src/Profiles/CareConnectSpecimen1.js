const FHIRServer = require('../..')

let Specimen = require(FHIRServer.resources.STU3.Specimen)
let Meta = require(FHIRServer.resources.STU3.Meta)

class CareConnectSpecimen1 extends Specimen {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Specimen-1'
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


}

module.exports = CareConnectSpecimen1
