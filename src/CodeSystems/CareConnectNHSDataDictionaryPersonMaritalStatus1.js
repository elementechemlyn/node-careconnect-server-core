// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSDataDictionary-PersonMaritalStatus-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'active', 'concept': [{ 'display': 'Single', 'code': 'S' }, { 'display': 'Married/Civil Partner', 'code': 'M' }, { 'display': 'Divorced/Person whose Civil Partnership has been dissolved', 'code': 'D' }, { 'display': 'Widowed/Surviving Civil Partner', 'code': 'W' }, { 'display': 'Separated', 'code': 'P' }, { 'display': 'Not disclosed', 'code': 'N' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-NHSDataDictionary-PersonMaritalStatus-1', 'name': 'NHS Data Model and Dictionary Person Marital Status Code', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSDataDictionary-PersonMaritalStatus-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2016-08-03T00:00:00+01:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/p/person/person_marital_status_code_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-sourceReference' }], 'version': '1.0.0', 'content': 'complete', 'description': 'An indicator to identify the legal marital status of a Person.' }

const CareConnectNHSDataDictionaryPersonMaritalStatus1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectNHSDataDictionaryPersonMaritalStatus1