// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ImmunizationExplanationReason-1
const CareConnectImmunizationExplanationReason1CodeSystem = require('../../src/CodeSystems/CareConnectImmunizationExplanationReason1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code to record the reason why a vaccine was administered.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ImmunizationExplanationReason-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-ImmunizationExplanationReason-1', 'name': 'Care Connect Immunization Explanation Reason', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ImmunizationExplanationReason-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-05-03T00:00:00+00:00' }
const CareConnectImmunizationExplanationReason1 = new CareConnectBaseValueSet(vsJsn)
CareConnectImmunizationExplanationReason1.code_systems = []
CareConnectImmunizationExplanationReason1.needs_snomed = false
CareConnectImmunizationExplanationReason1.code_systems.push(CareConnectImmunizationExplanationReason1CodeSystem)
module.exports = CareConnectImmunizationExplanationReason1
