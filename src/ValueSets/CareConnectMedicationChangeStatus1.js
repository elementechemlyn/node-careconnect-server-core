// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationChangeStatus-1
const CareConnectMedicationChangeStatus1CodeSystem = require('../../src/CodeSystems/CareConnectMedicationChangeStatus1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the change status of a medication.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationChangeStatus-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-MedicationChangeStatus-1', 'name': 'Care Connect Medication Change Status', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationChangeStatus-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00' }
const CareConnectMedicationChangeStatus1 = new CareConnectBaseValueSet(vsJsn)
CareConnectMedicationChangeStatus1.code_systems = []
CareConnectMedicationChangeStatus1.needs_snomed = false
CareConnectMedicationChangeStatus1.code_systems.push(CareConnectMedicationChangeStatus1CodeSystem)
module.exports = CareConnectMedicationChangeStatus1
