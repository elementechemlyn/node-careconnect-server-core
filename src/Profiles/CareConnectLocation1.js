const FHIRServer = require('../..')

let Location = require(FHIRServer.resources.STU3.Location)
let Meta = require(FHIRServer.resources.STU3.Meta)
let Identifier = require(FHIRServer.resources.STU3.Identifier)

class CareConnectLocation1 extends Location {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Location-1'
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


  get odsSiteCodeIdentifier () {
    let retObject = this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/ods-site-code')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      retObject.system = 'https://fhir.nhs.uk/Id/ods-site-code'
      this.odsSiteCodeIdentifier = retObject
    }
    return this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/ods-site-code')
  }
  set odsSiteCodeIdentifier (value) {
    let v = new Identifier(value)
    v.system = 'https://fhir.nhs.uk/Id/ods-site-code'
    if (this.identifier) {
      const nnn = this.identifier.findIndex(obj => obj.system === 'https://fhir.nhs.uk/Id/ods-site-code')
      if (nnn === -1) {
        this.identifier.unshift(v)
      } else {
        this.identifier[nnn] = v
      }
    } else {
      this.identifier = v
    }
  }
  get otherIdentifier () {
    let retObject = this.identifier &&
      this.identifier.filter(obj => obj.system !== 'https://fhir.nhs.uk/Id/ods-site-code')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      this.otherIdentifier = retObject
      return [retObject]
    }
    return retObject
  }

  set otherIdentifier (newValue) {
    const existingOdssitecodeIdentifier = this.odsSiteCodeIdentifier
    this.identifier = Array.isArray(newValue)
      ? newValue.map(val => new Identifier(val))
      : [new Identifier(newValue)]
    if (existingOdssitecodeIdentifier) {
      this.odsSiteCodeIdentifier = existingOdssitecodeIdentifier
    }
  }
}

module.exports = CareConnectLocation1
