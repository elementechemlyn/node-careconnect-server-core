// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationSupplyType-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Over the counter', 'code': 'over-the-counter' }, { 'display': 'Emergency supply', 'code': 'emergency-supply' }, { 'display': 'Patient group direction', 'code': 'patient-group-direction' }, { 'display': 'Minor ailments scheme', 'code': 'minor-ailments-scheme' }, { 'display': 'Prescription dispensing', 'code': 'prescription-dispensing' }, { 'display': 'Private prescription dispensing', 'code': 'private-prescription-dispensing' }, { 'display': 'Self declared', 'code': 'self-declared' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-MedicationSupplyType-1', 'name': 'Care Connect Medication Supply Type', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationSupplyType-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-07-11T00:00:00+00:00', 'version': '1.0.0', 'content': 'complete', 'description': 'A CodeSystem to identify the type of medication supply.' }

const CareConnectMedicationSupplyType1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectMedicationSupplyType1
