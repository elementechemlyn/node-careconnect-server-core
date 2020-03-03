// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationFlag-1
const CareConnectMedicationFlag1CodeSystem = require('../../src/CodeSystems/CareConnectMedicationFlag1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify detail codes for flagged medication issues.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationFlag-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-MedicationFlag-1', 'name': 'Care Connect Medication Flag', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationFlag-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2017-08-01T00:00:00+00:00' }
const CareConnectMedicationFlag1 = new CareConnectBaseValueSet(vsJsn)
CareConnectMedicationFlag1.code_systems = []
CareConnectMedicationFlag1.needs_snomed = false
CareConnectMedicationFlag1.code_systems.push(CareConnectMedicationFlag1CodeSystem)
module.exports = CareConnectMedicationFlag1
