// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSDataDictionary-PersonMaritalStatus-1
const CareConnectNHSDataDictionaryPersonMaritalStatus1CodeSystem = require('../../src/CodeSystems/CareConnectNHSDataDictionaryPersonMaritalStatus1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'active', 'resourceType': 'ValueSet', 'id': 'CareConnect-NHSDataDictionary-PersonMaritalStatus-1', 'name': 'NHS Data Model and Dictionary Person Marital Status Code', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSDataDictionary-PersonMaritalStatus-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2016-08-03T00:00:00+01:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/p/person/person_marital_status_code_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.0.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSDataDictionary-PersonMaritalStatus-1' }] }, 'description': 'An indicator to identify the legal marital status of a Person.' }
const CareConnectNHSDataDictionaryPersonMaritalStatus1 = new CareConnectBaseValueSet(vsJsn)
CareConnectNHSDataDictionaryPersonMaritalStatus1.code_systems = []
CareConnectNHSDataDictionaryPersonMaritalStatus1.needs_snomed = false
CareConnectNHSDataDictionaryPersonMaritalStatus1.code_systems.push(CareConnectNHSDataDictionaryPersonMaritalStatus1CodeSystem)
module.exports = CareConnectNHSDataDictionaryPersonMaritalStatus1
