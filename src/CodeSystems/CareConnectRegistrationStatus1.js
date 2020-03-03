// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-RegistrationStatus-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Active', 'code': 'A' }, { 'display': 'Deduction Pending', 'code': 'D' }, { 'display': 'Inactive', 'code': 'I' }, { 'display': 'Registration Pending', 'code': 'R' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-RegistrationStatus-1', 'name': 'Care Connect Registration Status', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-RegistrationStatus-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2017-08-01T00:00:00+00:00', 'version': '1.0.0', 'content': 'complete', 'description': 'A CodeSystem that identifies the status of registration for a patient at the healthcare organisation.' }

const CareConnectRegistrationStatus1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectRegistrationStatus1
