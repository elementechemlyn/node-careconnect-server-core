// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ResidentialStatus-1
const CareConnectResidentialStatus1CodeSystem = require('../../src/CodeSystems/CareConnectResidentialStatus1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet that identifies the residential status of a patient.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ResidentialStatus-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-ResidentialStatus-1', 'name': 'Care Connect Residential Status', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ResidentialStatus-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00' }
const CareConnectResidentialStatus1 = new CareConnectBaseValueSet(vsJsn)
CareConnectResidentialStatus1.code_systems = []
CareConnectResidentialStatus1.needs_snomed = false
CareConnectResidentialStatus1.code_systems.push(CareConnectResidentialStatus1CodeSystem)
module.exports = CareConnectResidentialStatus1
