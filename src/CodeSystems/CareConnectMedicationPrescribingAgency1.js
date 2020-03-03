// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationPrescribingAgency-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Prescribed at GP practice', 'code': 'prescribed-at-gp-practice' }, { 'display': 'Prescribed by another organisation', 'code': 'prescribed-by-another-organisation' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-MedicationPrescribingAgency-1', 'name': 'Care Connect Medication Prescribing Agency', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationPrescribingAgency-1', 'copyright': 'Copyright © 2019 HL7 UK', 'publisher': 'HL7 UK', 'date': '2019-12-05T17:01:00+00:00', 'version': '1.0.0', 'content': 'complete', 'description': 'A CodeSystem to identify the prescribing agency.' }

const CareConnectMedicationPrescribingAgency1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectMedicationPrescribingAgency1
