// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSDataDictionary-PersonStatedGender-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'active', 'concept': [{ 'display': 'Male', 'code': '1' }, { 'display': 'Female', 'code': '2' }, { 'display': 'Indeterminate (unable to be classified as either male or female)', 'code': '9' }, { 'display': 'Not Known (not recorded)', 'code': 'X' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-NHSDataDictionary-PersonStatedGender-1', 'name': 'NHS Data Model and Dictionary Person Stated Gender Code', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSDataDictionary-PersonStatedGender-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2017-08-21T12:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/p/person/person_stated_gender_code_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-sourceReference' }], 'version': '1.0.0', 'content': 'complete', 'description': 'The gender of a Person. Person Stated Gender Code is self declared or inferred by observation for those unable to declare their Person Stated Gender.' }

const CareConnectNHSDataDictionaryPersonStatedGender1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectNHSDataDictionaryPersonStatedGender1