// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-LanguageAbilityMode-1
const CareConnectLanguageAbilityMode1CodeSystem = require('../../src/CodeSystems/CareConnectLanguageAbilityMode1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityMode-1' }] }, 'resourceType': 'ValueSet', 'id': 'CareConnect-LanguageAbilityMode-1', 'name': 'Care Connect Language Ability Mode', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-LanguageAbilityMode-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00', 'version': '1.1.0', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.5.60', 'system': 'urn:ietf:rfc:3986' }], 'description': 'A ValueSet that identifies the mode the patient can communicate in, representing the method of expression of the language.' }
const CareConnectLanguageAbilityMode1 = new CareConnectBaseValueSet(vsJsn)
CareConnectLanguageAbilityMode1.code_systems = []
CareConnectLanguageAbilityMode1.needs_snomed = false
CareConnectLanguageAbilityMode1.code_systems.push(CareConnectLanguageAbilityMode1CodeSystem)
module.exports = CareConnectLanguageAbilityMode1
