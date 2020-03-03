const FHIRServer = require('../..')

let Organization = require(FHIRServer.resources.STU3.Organization)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectMainLocation1 = require('../../src/Extensions/ExtensionCareConnectMainLocation1.js')
let OrganizationPeriod = require(FHIRServer.resources.STU3.Extension)
let Identifier = require(FHIRServer.resources.STU3.Identifier)

class CareConnectOrganization1 extends Organization {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Organization-1'
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

  set mainLocation (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MainLocation-1') {
      throw new Error('Incorrect profile URL for mainLocation')
    }
    if (!(value instanceof ExtensionCareConnectMainLocation1)) {
      value = new ExtensionCareConnectMainLocation1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get mainLocation () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MainLocation-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectMainLocation1)) {
        ext = new ExtensionCareConnectMainLocation1(ext.toJSON())
        this.mainLocation = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-MainLocation-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectMainLocation1()
      this.mainLocation = retObject
      return [retObject]
    }
    return retObject
  }
  set organizationPeriod (value) {
    if (value.url !== 'http://hl7.org/fhir/StructureDefinition/organization-period') {
      throw new Error('Incorrect profile URL for organizationPeriod')
    }
    if (!(value instanceof OrganizationPeriod)) {
      value = new OrganizationPeriod(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get organizationPeriod () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/organization-period')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof OrganizationPeriod)) {
        ext = new OrganizationPeriod(ext.toJSON())
        this.organizationPeriod = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/organization-period')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new OrganizationPeriod()
      this.organizationPeriod = retObject
      return [retObject]
    }
    return retObject
  }

  get odsOrganisationCodeIdentifier () {
    let retObject = this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/ods-organization-code')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      retObject.system = 'https://fhir.nhs.uk/Id/ods-organization-code'
      this.odsOrganisationCodeIdentifier = retObject
    }
    return this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/ods-organization-code')
  }
  set odsOrganisationCodeIdentifier (value) {
    let v = new Identifier(value)
    v.system = 'https://fhir.nhs.uk/Id/ods-organization-code'
    if (this.identifier) {
      const nnn = this.identifier.findIndex(obj => obj.system === 'https://fhir.nhs.uk/Id/ods-organization-code')
      if (nnn === -1) {
        this.identifier.unshift(v)
      } else {
        this.identifier[nnn] = v
      }
    } else {
      this.identifier = v
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
      this.identifier.filter(obj => obj.system !== 'https://fhir.nhs.uk/Id/ods-organization-code')
    retObject = retObject &&
      retObject.filter(obj => obj.system !== 'https://fhir.nhs.uk/Id/ods-site-code')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      this.otherIdentifier = retObject
      return [retObject]
    }
    return retObject
  }

  set otherIdentifier (newValue) {
    const existingOdsorganisationcodeIdentifier = this.odsOrganisationCodeIdentifier
    const existingOdssitecodeIdentifier = this.odsSiteCodeIdentifier
    this.identifier = Array.isArray(newValue)
      ? newValue.map(val => new Identifier(val))
      : [new Identifier(newValue)]
    if (existingOdsorganisationcodeIdentifier) {
      this.odsOrganisationCodeIdentifier = existingOdsorganisationcodeIdentifier
    }
    if (existingOdssitecodeIdentifier) {
      this.odsSiteCodeIdentifier = existingOdssitecodeIdentifier
    }
  }
}

module.exports = CareConnectOrganization1
