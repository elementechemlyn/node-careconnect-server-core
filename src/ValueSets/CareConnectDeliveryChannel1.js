// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DeliveryChannel-1
const CareConnectDeliveryChannel1CodeSystem = require('../../src/CodeSystems/CareConnectDeliveryChannel1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet that identifies the delivery channel of an appointment.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DeliveryChannel-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2019 HL7 UK', 'id': 'CareConnect-DeliveryChannel-1', 'name': 'CareConnect-DeliveryChannel-1', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DeliveryChannel-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2019-12-02T11:08:00+00:00' }
const CareConnectDeliveryChannel1 = new CareConnectBaseValueSet(vsJsn)
CareConnectDeliveryChannel1.code_systems = []
CareConnectDeliveryChannel1.needs_snomed = false
CareConnectDeliveryChannel1.code_systems.push(CareConnectDeliveryChannel1CodeSystem)
module.exports = CareConnectDeliveryChannel1
