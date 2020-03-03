// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationSupplyType-1
const CareConnectMedicationSupplyType1CodeSystem = require('../../src/CodeSystems/CareConnectMedicationSupplyType1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the type of medication supply.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-MedicationSupplyType-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-MedicationSupplyType-1', 'name': 'Care Connect Medication Supply Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MedicationSupplyType-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-07-11T00:00:00+00:00' }
const CareConnectMedicationSupplyType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectMedicationSupplyType1.code_systems = []
CareConnectMedicationSupplyType1.needs_snomed = false
CareConnectMedicationSupplyType1.code_systems.push(CareConnectMedicationSupplyType1CodeSystem)
module.exports = CareConnectMedicationSupplyType1
