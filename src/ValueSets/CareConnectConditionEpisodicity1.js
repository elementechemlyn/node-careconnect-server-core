// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionEpisodicity-1
const CareConnectConditionEpisodicity1CodeSystem = require('../../src/CodeSystems/CareConnectConditionEpisodicity1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'resourceType': 'ValueSet', 'id': 'CareConnect-ConditionEpisodicity-1', 'name': 'Care Connect Condition Episodicity', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionEpisodicity-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-map', 'valueReference': { 'reference': 'https://fhir.hl7.org.uk/STU3/ConceptMap/CareConnect-ConditionEpisodicity-1' } }], 'version': '1.1.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionEpisodicity-1' }] }, 'description': 'A ValueSet to identify the episodicity of a condition.' }
const CareConnectConditionEpisodicity1 = new CareConnectBaseValueSet(vsJsn)
CareConnectConditionEpisodicity1.code_systems = []
CareConnectConditionEpisodicity1.needs_snomed = false
CareConnectConditionEpisodicity1.code_systems.push(CareConnectConditionEpisodicity1CodeSystem)
module.exports = CareConnectConditionEpisodicity1
