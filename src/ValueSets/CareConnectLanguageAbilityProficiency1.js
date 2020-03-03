// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-LanguageAbilityProficiency-1
const CareConnectLanguageAbilityProficiency1CodeSystem = require('../../src/CodeSystems/CareConnectLanguageAbilityProficiency1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityProficiency-1' }] }, 'resourceType': 'ValueSet', 'id': 'CareConnect-LanguageAbilityProficiency-1', 'name': 'Care Connect Language Ability Proficiency', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-LanguageAbilityProficiency-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00', 'version': '1.1.0', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.5.61', 'system': 'urn:ietf:rfc:3986' }], 'description': 'A ValueSet to identify the level of proficiency in communicating a language.' }
const CareConnectLanguageAbilityProficiency1 = new CareConnectBaseValueSet(vsJsn)
CareConnectLanguageAbilityProficiency1.code_systems = []
CareConnectLanguageAbilityProficiency1.needs_snomed = false
CareConnectLanguageAbilityProficiency1.code_systems.push(CareConnectLanguageAbilityProficiency1CodeSystem)
module.exports = CareConnectLanguageAbilityProficiency1
