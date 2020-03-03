const FHIRServer = require('../..')

let Encounter = require(FHIRServer.resources.STU3.Encounter)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectEncounterTransport1 = require('../../src/Extensions/ExtensionCareConnectEncounterTransport1.js')
let ExtensionCareConnectOutcomeOfAttendance1 = require('../../src/Extensions/ExtensionCareConnectOutcomeOfAttendance1.js')
let ExtensionCareConnectEmergencyCareDischargeStatus1 = require('../../src/Extensions/ExtensionCareConnectEmergencyCareDischargeStatus1.js')

class CareConnectEncounter1 extends Encounter {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Encounter-1'
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

  set encounterTransport (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EncounterTransport-1') {
      throw new Error('Incorrect profile URL for encounterTransport')
    }
    if (!(value instanceof ExtensionCareConnectEncounterTransport1)) {
      value = new ExtensionCareConnectEncounterTransport1(value.toJSON())
    }
    this.addExtension(value)
  }

  get encounterTransport () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EncounterTransport-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectEncounterTransport1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectEncounterTransport1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EncounterTransport-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectEncounterTransport1()
      this.encounterTransport = retObject
      return [retObject]
    }
    return retObject
  }
  set outcomeOfAttendance (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-OutcomeOfAttendance-1') {
      throw new Error('Incorrect profile URL for outcomeOfAttendance')
    }
    if (!(value instanceof ExtensionCareConnectOutcomeOfAttendance1)) {
      value = new ExtensionCareConnectOutcomeOfAttendance1(value.toJSON())
    }
    this.addExtension(value)
  }

  get outcomeOfAttendance () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-OutcomeOfAttendance-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectOutcomeOfAttendance1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectOutcomeOfAttendance1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-OutcomeOfAttendance-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectOutcomeOfAttendance1()
      this.outcomeOfAttendance = retObject
      return [retObject]
    }
    return retObject
  }
  set emergencyCareDischargeStatus (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EmergencyCareDischargeStatus-1') {
      throw new Error('Incorrect profile URL for emergencyCareDischargeStatus')
    }
    if (!(value instanceof ExtensionCareConnectEmergencyCareDischargeStatus1)) {
      value = new ExtensionCareConnectEmergencyCareDischargeStatus1(value.toJSON())
    }
    this.addExtension(value)
  }

  get emergencyCareDischargeStatus () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EmergencyCareDischargeStatus-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectEmergencyCareDischargeStatus1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectEmergencyCareDischargeStatus1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EmergencyCareDischargeStatus-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectEmergencyCareDischargeStatus1()
      this.emergencyCareDischargeStatus = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectEncounter1
