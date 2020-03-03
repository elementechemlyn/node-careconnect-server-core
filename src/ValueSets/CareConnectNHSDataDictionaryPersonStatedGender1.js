// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSDataDictionary-PersonStatedGender-1
const CareConnectNHSDataDictionaryPersonStatedGender1CodeSystem = require('../../src/CodeSystems/CareConnectNHSDataDictionaryPersonStatedGender1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'active', 'resourceType': 'ValueSet', 'id': 'CareConnect-NHSDataDictionary-PersonStatedGender-1', 'name': 'NHS Data Model and Dictionary Person Stated Gender Code', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSDataDictionary-PersonStatedGender-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2017-08-21T12:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/p/person/person_stated_gender_code_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.0.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSDataDictionary-PersonStatedGender-1' }] }, 'description': 'The gender of a Person. Person Stated Gender Code is self declared or inferred by observation for those unable to declare their Person Stated Gender.' }
const CareConnectNHSDataDictionaryPersonStatedGender1 = new CareConnectBaseValueSet(vsJsn)
CareConnectNHSDataDictionaryPersonStatedGender1.code_systems = []
CareConnectNHSDataDictionaryPersonStatedGender1.needs_snomed = false
CareConnectNHSDataDictionaryPersonStatedGender1.code_systems.push(CareConnectNHSDataDictionaryPersonStatedGender1CodeSystem)
module.exports = CareConnectNHSDataDictionaryPersonStatedGender1
