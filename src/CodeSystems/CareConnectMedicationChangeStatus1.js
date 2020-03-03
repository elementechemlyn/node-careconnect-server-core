// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationChangeStatus-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'code': 'Continued' }, { 'code': 'Added' }, { 'code': 'Amended' }, { 'code': 'On-hold' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-MedicationChangeStatus-1', 'name': 'Care Connect Medication Change Status', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationChangeStatus-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'version': '1.1.0', 'content': 'complete', 'description': 'A CodeSystem to identify the change status of a medication.' }

const CareConnectMedicationChangeStatus1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectMedicationChangeStatus1
