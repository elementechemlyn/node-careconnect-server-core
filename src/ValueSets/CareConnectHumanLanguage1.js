// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-HumanLanguage-1
const CareConnectHumanLanguage1CodeSystem = require('../../src/CodeSystems/CareConnectHumanLanguage1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-HumanLanguage-1' }] }, 'resourceType': 'ValueSet', 'id': 'CareConnect-HumanLanguage-1', 'name': 'Care Connect Human Language', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-HumanLanguage-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00', 'version': '1.1.0', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.2.1.3.2.4.17.70', 'system': 'urn:ietf:rfc:3986' }], 'description': 'A ValueSet that identifies the language used by a person.' }
const CareConnectHumanLanguage1 = new CareConnectBaseValueSet(vsJsn)
CareConnectHumanLanguage1.code_systems = []
CareConnectHumanLanguage1.needs_snomed = false
CareConnectHumanLanguage1.code_systems.push(CareConnectHumanLanguage1CodeSystem)
module.exports = CareConnectHumanLanguage1
