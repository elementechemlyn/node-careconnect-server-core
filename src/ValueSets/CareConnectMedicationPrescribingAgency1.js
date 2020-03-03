// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationPrescribingAgency-1
const CareConnectMedicationPrescribingAgency1CodeSystem = require('../../src/CodeSystems/CareConnectMedicationPrescribingAgency1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the prescribing agency.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationPrescribingAgency-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2019 HL7 UK', 'id': 'CareConnect-MedicationPrescribingAgency-1', 'name': 'Care Connect Medication Prescribing Agency', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationPrescribingAgency-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2019-12-05T17:01:00+00:00' }
const CareConnectMedicationPrescribingAgency1 = new CareConnectBaseValueSet(vsJsn)
CareConnectMedicationPrescribingAgency1.code_systems = []
CareConnectMedicationPrescribingAgency1.needs_snomed = false
CareConnectMedicationPrescribingAgency1.code_systems.push(CareConnectMedicationPrescribingAgency1CodeSystem)
module.exports = CareConnectMedicationPrescribingAgency1
