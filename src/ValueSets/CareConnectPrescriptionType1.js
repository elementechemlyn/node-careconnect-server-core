// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-PrescriptionType-1
const CareConnectPrescriptionType1CodeSystem = require('../../src/CodeSystems/CareConnectPrescriptionType1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the type of prescription.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PrescriptionType-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-PrescriptionType-1', 'name': 'Care Connect Prescription Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-PrescriptionType-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectPrescriptionType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectPrescriptionType1.code_systems = []
CareConnectPrescriptionType1.needs_snomed = false
CareConnectPrescriptionType1.code_systems.push(CareConnectPrescriptionType1CodeSystem)
module.exports = CareConnectPrescriptionType1
