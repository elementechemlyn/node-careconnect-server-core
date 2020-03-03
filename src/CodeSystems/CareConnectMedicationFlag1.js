// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationFlag-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Do Not discontinue Medication', 'code': 'do-not-discontinue' }, { 'display': 'Continue Indefinitely', 'code': 'continue-indefinitely' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-MedicationFlag-1', 'name': 'Care Connect Medication Flag', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationFlag-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2017-08-01T00:00:00+00:00', 'version': '1.0.0', 'content': 'complete', 'description': 'A CodeSystem to identify detail codes for flagged medication issues.' }

const CareConnectMedicationFlag1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectMedicationFlag1
