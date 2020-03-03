const FHIRServer = require('../..')

let Patient = require(FHIRServer.resources.STU3.Patient)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectEthnicCategory1 = require('../../src/Extensions/ExtensionCareConnectEthnicCategory1.js')
let ExtensionCareConnectReligiousAffiliation1 = require('../../src/Extensions/ExtensionCareConnectReligiousAffiliation1.js')
let PatientCadavericDonor = require(FHIRServer.resources.STU3.Extension)
let ExtensionCareConnectResidentialStatus1 = require('../../src/Extensions/ExtensionCareConnectResidentialStatus1.js')
let ExtensionCareConnectTreatmentCategory1 = require('../../src/Extensions/ExtensionCareConnectTreatmentCategory1.js')
let ExtensionCareConnectNHSCommunication1 = require('../../src/Extensions/ExtensionCareConnectNHSCommunication1.js')
let BirthPlace = require(FHIRServer.resources.STU3.Extension)
let ExtensionCareConnectNominatedPharmacy1 = require('../../src/Extensions/ExtensionCareConnectNominatedPharmacy1.js')
let ExtensionCareConnectDeathNotificationStatus1 = require('../../src/Extensions/ExtensionCareConnectDeathNotificationStatus1.js')
let Name = require(FHIRServer.resources.STU3.Name)
let Identifier = require(FHIRServer.resources.STU3.Identifier)

class CareConnectPatient1 extends Patient {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1'
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

  set ethnicCategory (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EthnicCategory-1') {
      throw new Error('Incorrect profile URL for ethnicCategory')
    }
    if (!(value instanceof ExtensionCareConnectEthnicCategory1)) {
      value = new ExtensionCareConnectEthnicCategory1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get ethnicCategory () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EthnicCategory-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectEthnicCategory1)) {
        ext = new ExtensionCareConnectEthnicCategory1(ext.toJSON())
        this.ethnicCategory = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EthnicCategory-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectEthnicCategory1()
      this.ethnicCategory = retObject
      return [retObject]
    }
    return retObject
  }
  set religiousAffiliation (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ReligiousAffiliation-1') {
      throw new Error('Incorrect profile URL for religiousAffiliation')
    }
    if (!(value instanceof ExtensionCareConnectReligiousAffiliation1)) {
      value = new ExtensionCareConnectReligiousAffiliation1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get religiousAffiliation () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ReligiousAffiliation-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectReligiousAffiliation1)) {
        ext = new ExtensionCareConnectReligiousAffiliation1(ext.toJSON())
        this.religiousAffiliation = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ReligiousAffiliation-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectReligiousAffiliation1()
      this.religiousAffiliation = retObject
      return [retObject]
    }
    return retObject
  }
  set patientCadavericDonor (value) {
    if (value.url !== 'http://hl7.org/fhir/StructureDefinition/patient-cadavericDonor') {
      throw new Error('Incorrect profile URL for patientCadavericDonor')
    }
    if (!(value instanceof PatientCadavericDonor)) {
      value = new PatientCadavericDonor(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get patientCadavericDonor () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/patient-cadavericDonor')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof PatientCadavericDonor)) {
        ext = new PatientCadavericDonor(ext.toJSON())
        this.patientCadavericDonor = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/patient-cadavericDonor')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new PatientCadavericDonor()
      this.patientCadavericDonor = retObject
      return [retObject]
    }
    return retObject
  }
  set residentialStatus (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ResidentialStatus-1') {
      throw new Error('Incorrect profile URL for residentialStatus')
    }
    if (!(value instanceof ExtensionCareConnectResidentialStatus1)) {
      value = new ExtensionCareConnectResidentialStatus1(value.toJSON())
    }
    this.addExtension(value)
  }

  get residentialStatus () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ResidentialStatus-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectResidentialStatus1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectResidentialStatus1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ResidentialStatus-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectResidentialStatus1()
      this.residentialStatus = retObject
      return [retObject]
    }
    return retObject
  }
  set treatmentCategory (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-TreatmentCategory-1') {
      throw new Error('Incorrect profile URL for treatmentCategory')
    }
    if (!(value instanceof ExtensionCareConnectTreatmentCategory1)) {
      value = new ExtensionCareConnectTreatmentCategory1(value.toJSON())
    }
    this.addExtension(value)
  }

  get treatmentCategory () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-TreatmentCategory-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectTreatmentCategory1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectTreatmentCategory1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-TreatmentCategory-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectTreatmentCategory1()
      this.treatmentCategory = retObject
      return [retObject]
    }
    return retObject
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
  set birthPlace (value) {
    if (value.url !== 'http://hl7.org/fhir/StructureDefinition/birthPlace') {
      throw new Error('Incorrect profile URL for birthPlace')
    }
    if (!(value instanceof BirthPlace)) {
      value = new BirthPlace(value.toJSON())
    }
    this.addExtension(value)
  }

  get birthPlace () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/birthPlace')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof BirthPlace)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new BirthPlace(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'http://hl7.org/fhir/StructureDefinition/birthPlace')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new BirthPlace()
      this.birthPlace = retObject
      return [retObject]
    }
    return retObject
  }
  set nominatedPharmacy (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NominatedPharmacy-1') {
      throw new Error('Incorrect profile URL for nominatedPharmacy')
    }
    if (!(value instanceof ExtensionCareConnectNominatedPharmacy1)) {
      value = new ExtensionCareConnectNominatedPharmacy1(value.toJSON())
    }
    this.addExtension(value)
  }

  get nominatedPharmacy () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NominatedPharmacy-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectNominatedPharmacy1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectNominatedPharmacy1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NominatedPharmacy-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectNominatedPharmacy1()
      this.nominatedPharmacy = retObject
      return [retObject]
    }
    return retObject
  }
  set deathNotificationStatus (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DeathNotificationStatus-1') {
      throw new Error('Incorrect profile URL for deathNotificationStatus')
    }
    if (!(value instanceof ExtensionCareConnectDeathNotificationStatus1)) {
      value = new ExtensionCareConnectDeathNotificationStatus1(value.toJSON())
    }
    this.addReplaceExtension(value)
  }

  get deathNotificationStatus () {
    let ext = this.extension && this.extension.find(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DeathNotificationStatus-1')
    if (ext) {
      // if this got built from a generic object - take the chance to set it up 'correctly'
      if (!(ext instanceof ExtensionCareConnectDeathNotificationStatus1)) {
        ext = new ExtensionCareConnectDeathNotificationStatus1(ext.toJSON())
        this.deathNotificationStatus = ext
      }
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DeathNotificationStatus-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectDeathNotificationStatus1()
      this.deathNotificationStatus = retObject
      return [retObject]
    }
    return retObject
  }

  get officialName () {
    let retObject = this.name && this.name.find(obj => obj.use === 'official')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Name()
      retObject.use = 'official'
      this.officialName = retObject
    }
    return this.name && this.name.find(obj => obj.use === 'official')
  }
  set officialName (value) {
    let v = new Name(value)
    v.use = 'official'
    if (this.name) {
      const nnn = this.name.findIndex(obj => obj.use === 'official')
      if (nnn === -1) {
        this.name.unshift(v)
      } else {
        this.name[nnn] = v
      }
    } else {
      this.name = v
    }
  }
  get otherName () {
    let retObject = this.name &&
      this.name.filter(obj => obj.use !== 'official')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Name()
      this.otherName = retObject
      return [retObject]
    }
    return retObject
  }

  set otherName (newValue) {
    const existingOfficialName = this.officialName
    this.name = Array.isArray(newValue)
      ? newValue.map(val => new Name(val))
      : [new Name(newValue)]
    if (existingOfficialName) {
      this.officialName = existingOfficialName
    }
  }
  get nhsNumberIdentifier () {
    let retObject = this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/nhs-number')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      retObject.system = 'https://fhir.nhs.uk/Id/nhs-number'
      this.nhsNumberIdentifier = retObject
    }
    return this.identifier && this.identifier.find(obj => obj.system === 'https://fhir.nhs.uk/Id/nhs-number')
  }
  set nhsNumberIdentifier (value) {
    let v = new Identifier(value)
    v.system = 'https://fhir.nhs.uk/Id/nhs-number'
    if (this.identifier) {
      const nnn = this.identifier.findIndex(obj => obj.system === 'https://fhir.nhs.uk/Id/nhs-number')
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
      this.identifier.filter(obj => obj.system !== 'https://fhir.nhs.uk/Id/nhs-number')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new Identifier()
      this.otherIdentifier = retObject
      return [retObject]
    }
    return retObject
  }

  set otherIdentifier (newValue) {
    const existingNhsnumberIdentifier = this.nhsNumberIdentifier
    this.identifier = Array.isArray(newValue)
      ? newValue.map(val => new Identifier(val))
      : [new Identifier(newValue)]
    if (existingNhsnumberIdentifier) {
      this.nhsNumberIdentifier = existingNhsnumberIdentifier
    }
  }
}

module.exports = CareConnectPatient1
