const FHIRServer = require('../..')

let Appointment = require(FHIRServer.resources.STU3.Appointment)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectDeliveryChannel1 = require('../../src/Extensions/ExtensionCareConnectDeliveryChannel1.js')
let ExtensionCareConnectAppointmentCancellationReason1 = require('../../src/Extensions/ExtensionCareConnectAppointmentCancellationReason1.js')
let ExtensionCareConnectBookingOrganisation1 = require('../../src/Extensions/ExtensionCareConnectBookingOrganisation1.js')

class CareConnectAppointment1 extends Appointment {
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
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Appointment-1'
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

  set deliveryChannel (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DeliveryChannel-1') {
      throw new Error('Incorrect profile URL for deliveryChannel')
    }
    if (!(value instanceof ExtensionCareConnectDeliveryChannel1)) {
      value = new ExtensionCareConnectDeliveryChannel1(value.toJSON())
    }
    this.addExtension(value)
  }

  get deliveryChannel () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DeliveryChannel-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectDeliveryChannel1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectDeliveryChannel1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DeliveryChannel-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectDeliveryChannel1()
      this.deliveryChannel = retObject
      return [retObject]
    }
    return retObject
  }
  set appointmentCancellationReason (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AppointmentCancellationReason-1') {
      throw new Error('Incorrect profile URL for appointmentCancellationReason')
    }
    if (!(value instanceof ExtensionCareConnectAppointmentCancellationReason1)) {
      value = new ExtensionCareConnectAppointmentCancellationReason1(value.toJSON())
    }
    this.addExtension(value)
  }

  get appointmentCancellationReason () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AppointmentCancellationReason-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectAppointmentCancellationReason1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectAppointmentCancellationReason1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AppointmentCancellationReason-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectAppointmentCancellationReason1()
      this.appointmentCancellationReason = retObject
      return [retObject]
    }
    return retObject
  }
  set bookingOrganisation (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-BookingOrganisation-1') {
      throw new Error('Incorrect profile URL for bookingOrganisation')
    }
    if (!(value instanceof ExtensionCareConnectBookingOrganisation1)) {
      value = new ExtensionCareConnectBookingOrganisation1(value.toJSON())
    }
    this.addExtension(value)
  }

  get bookingOrganisation () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-BookingOrganisation-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectBookingOrganisation1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectBookingOrganisation1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-BookingOrganisation-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectBookingOrganisation1()
      this.bookingOrganisation = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectAppointment1
