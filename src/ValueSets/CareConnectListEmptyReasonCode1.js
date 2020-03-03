// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ListEmptyReasonCode-1
const CareConnectListEmptyReasonCode1CodeSystem = require('../../src/CodeSystems/CareConnectListEmptyReasonCode1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the reason a list may be empty.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ListEmptyReasonCode-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-ListEmptyReasonCode-1', 'name': 'Care Connect List Empty Reason Code', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ListEmptyReasonCode-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectListEmptyReasonCode1 = new CareConnectBaseValueSet(vsJsn)
CareConnectListEmptyReasonCode1.code_systems = []
CareConnectListEmptyReasonCode1.needs_snomed = false
CareConnectListEmptyReasonCode1.code_systems.push(CareConnectListEmptyReasonCode1CodeSystem)
module.exports = CareConnectListEmptyReasonCode1
