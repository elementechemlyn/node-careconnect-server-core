// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-TreatmentCategory-1
const CareConnectTreatmentCategory1CodeSystem = require('../../src/CodeSystems/CareConnectTreatmentCategory1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet that identifies the treatment category for this patient.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-TreatmentCategory-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-TreatmentCategory-1', 'name': 'Care Connect Treatment Category', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-TreatmentCategory-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00' }
const CareConnectTreatmentCategory1 = new CareConnectBaseValueSet(vsJsn)
CareConnectTreatmentCategory1.code_systems = []
CareConnectTreatmentCategory1.needs_snomed = false
CareConnectTreatmentCategory1.code_systems.push(CareConnectTreatmentCategory1CodeSystem)
module.exports = CareConnectTreatmentCategory1
