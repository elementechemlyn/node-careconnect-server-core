const FHIRServer = require('../..')

let Practitioner = require(FHIRServer.resources.STU3.Practitioner)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectNHSCommunication1 = require('../../src/Extensions/ExtensionCareConnectNHSCommunication1.js')
let Identifier = require(FHIRServer.resources.STU3.Identifier)

class CareConnectPractitioner1 extends Practitioner {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1'
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

  set nhsCommunication (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSCommunication-1') {
      throw new Error('Incorrect profile URL for nhsCommunication')
    }
    if (!(value instanceof ExtensionCareConnectNHSCommunication1)) {
      value = new ExtensionCareConnectNHSCommunication1(value.toJSON())
    }
    this.addExtension(value)
  }

  get nhsCommunication () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSCommunication-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectNHSCommunication1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectNHSCommunication1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSCommunication-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectNHSCommunication1()
      this.nhsCommunication = retObject
      return [retObject]
    }
    return retObject
  }

  get sdsUserIDIdentifier () {
    let retObject = this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/sds-user-id')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      retObject.system = 'https://fhir.nhs.uk/Id/sds-user-id'
      this.sdsUserIDIdentifier = retObject
    }
    return this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/sds-user-id')
  }
  set sdsUserIDIdentifier (value) {
    let v = new Identifier(value)
    v.system = 'https://fhir.nhs.uk/Id/sds-user-id'
    if (this.identifier) {
      const nnn = this.identifier.findIndex(obj => obj.system === 'https://fhir.nhs.uk/Id/sds-user-id')
      if (nnn === -1) {
        this.identifier.unshift(v)
      } else {
        this.identifier[nnn] = v
      }
    } else {
      this.identifier = v
    }
  }
  get sdsRoleProfileIDIdentifier () {
    let retObject = this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/sds-role-profile-id')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      retObject.system = 'https://fhir.nhs.uk/Id/sds-role-profile-id'
      this.sdsRoleProfileIDIdentifier = retObject
    }
    return this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/sds-role-profile-id')
  }
  set sdsRoleProfileIDIdentifier (value) {
    let v = new Identifier(value)
    v.system = 'https://fhir.nhs.uk/Id/sds-role-profile-id'
    if (this.identifier) {
      const nnn = this.identifier.findIndex(obj => obj.system === 'https://fhir.nhs.uk/Id/sds-role-profile-id')
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
      this.identifier.filter(obj => obj.system !== 'https://fhir.nhs.uk/Id/sds-user-id')
    retObject = retObject &&
      retObject.filter(obj => obj.system !== 'https://fhir.nhs.uk/Id/sds-role-profile-id')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      this.otherIdentifier = retObject
      return [retObject]
    }
    return retObject
  }

  set otherIdentifier (newValue) {
    const existingSdsuseridIdentifier = this.sdsUserIDIdentifier
    const existingSdsroleprofileidIdentifier = this.sdsRoleProfileIDIdentifier
    this.identifier = Array.isArray(newValue)
      ? newValue.map(val => new Identifier(val))
      : [new Identifier(newValue)]
    if (existingSdsuseridIdentifier) {
      this.sdsUserIDIdentifier = existingSdsuseridIdentifier
    }
    if (existingSdsroleprofileidIdentifier) {
      this.sdsRoleProfileIDIdentifier = existingSdsroleprofileidIdentifier
    }
  }
}

module.exports = CareConnectPractitioner1
