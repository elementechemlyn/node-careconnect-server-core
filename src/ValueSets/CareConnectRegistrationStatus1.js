// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-RegistrationStatus-1
const CareConnectRegistrationStatus1CodeSystem = require('../../src/CodeSystems/CareConnectRegistrationStatus1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet that identifies the status of registration for a patient at the healthcare organisation.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-RegistrationStatus-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-RegistrationStatus-1', 'name': 'Care Connect Registration Status', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-RegistrationStatus-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2017-08-01T00:00:00+00:00' }
const CareConnectRegistrationStatus1 = new CareConnectBaseValueSet(vsJsn)
CareConnectRegistrationStatus1.code_systems = []
CareConnectRegistrationStatus1.needs_snomed = false
CareConnectRegistrationStatus1.code_systems.push(CareConnectRegistrationStatus1CodeSystem)
module.exports = CareConnectRegistrationStatus1
