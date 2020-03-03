const FHIRServer = require('../..')

let PractitionerRole = require(FHIRServer.resources.STU3.PractitionerRole)
let Meta = require(FHIRServer.resources.STU3.Meta)
let Code = require(FHIRServer.resources.STU3.Code)

class CareConnectPractitionerRole1 extends PractitionerRole {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-PractitionerRole-1'
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


  get sdsJobRoleNameCode () {
    let retObject = this.code && this.code.find(obj => obj.coding.system === 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SDSJobRoleName-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Code()
      retObject.coding.system = 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SDSJobRoleName-1'
      this.sdsJobRoleNameCode = retObject
    }
    return this.code && this.code.find(obj => obj.coding.system === 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SDSJobRoleName-1')
  }
  set sdsJobRoleNameCode (value) {
    let v = new Code(value)
    v.coding.system = 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SDSJobRoleName-1'
    if (this.code) {
      const nnn = this.code.findIndex(obj => obj.coding.system === 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SDSJobRoleName-1')
      if (nnn === -1) {
        this.code.unshift(v)
      } else {
        this.code[nnn] = v
      }
    } else {
      this.code = v
    }
  }
  get otherCode () {
    let retObject = this.code &&
      this.code.filter(obj => obj.coding.system !== 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SDSJobRoleName-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Code()
      this.otherCode = retObject
      return [retObject]
    }
    return retObject
  }

  set otherCode (newValue) {
    const existingSdsjobrolenameCode = this.sdsJobRoleNameCode
    this.code = Array.isArray(newValue)
      ? newValue.map(val => new Code(val))
      : [new Code(newValue)]
    if (existingSdsjobrolenameCode) {
      this.sdsJobRoleNameCode = existingSdsjobrolenameCode
    }
  }
}

module.exports = CareConnectPractitionerRole1
