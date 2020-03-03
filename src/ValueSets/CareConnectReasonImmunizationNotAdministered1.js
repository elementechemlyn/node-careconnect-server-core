// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReasonImmunizationNotAdministered-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the reason why an immunization was not administered.', 'status': 'draft', 'compose': { 'include': [{ 'concept': [{ 'display': 'Did not attend child immunisation (finding)', 'code': '201741000000102' }, { 'display': 'Did not attend (finding)', 'code': '281399006' }, { 'display': 'Generally unwell (finding)', 'code': '213257006' }, { 'display': 'Immunization contraindicated (situation)', 'code': '266758009' }, { 'display': 'Immunization consent not given (finding)', 'code': '310376006' }], 'system': 'http://snomed.info/sct' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2019 HL7 UK', 'id': 'CareConnect-ReasonImmunizationNotAdministered-1', 'name': 'Care Connect Reason Immunization Not Administered', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReasonImmunizationNotAdministered-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2019-11-22T17:17:00+00:00' }
const CareConnectReasonImmunizationNotAdministered1 = new CareConnectBaseValueSet(vsJsn)
CareConnectReasonImmunizationNotAdministered1.code_systems = []
CareConnectReasonImmunizationNotAdministered1.needs_snomed = true
module.exports = CareConnectReasonImmunizationNotAdministered1
