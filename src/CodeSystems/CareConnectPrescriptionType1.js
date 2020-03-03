// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PrescriptionType-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Acute', 'code': 'acute' }, { 'display': 'Repeat', 'code': 'repeat' }, { 'display': 'Repeat dispensing', 'code': 'repeat-dispensing' }, { 'display': 'Delayed prescribing', 'code': 'delayed-prescribing' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-PrescriptionType-1', 'name': 'Care Connect Prescription Type', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PrescriptionType-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00', 'version': '1.2.0', 'content': 'complete', 'description': 'A CodeSystem to identify the type of prescription' }

const CareConnectPrescriptionType1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectPrescriptionType1
