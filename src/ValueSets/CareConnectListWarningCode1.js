// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ListWarningCode-1
const CareConnectListWarningCode1CodeSystem = require('../../src/CodeSystems/CareConnectListWarningCode1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the reason a list may be incomplete.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ListWarningCode-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-ListWarningCode-1', 'name': 'Care Connect List Warning Code', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ListWarningCode-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectListWarningCode1 = new CareConnectBaseValueSet(vsJsn)
CareConnectListWarningCode1.code_systems = []
CareConnectListWarningCode1.needs_snomed = false
CareConnectListWarningCode1.code_systems.push(CareConnectListWarningCode1CodeSystem)
module.exports = CareConnectListWarningCode1
