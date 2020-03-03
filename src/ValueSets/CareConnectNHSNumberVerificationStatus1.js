// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSNumberVerificationStatus-1
const CareConnectNHSNumberVerificationStatus1CodeSystem = require('../../src/CodeSystems/CareConnectNHSNumberVerificationStatus1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSNumberVerificationStatus-1' }] }, 'resourceType': 'ValueSet', 'id': 'CareConnect-NHSNumberVerificationStatus-1', 'name': 'Care Connect NHS Number Verification Status', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSNumberVerificationStatus-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/data_field_notes/n/nhs/nhs_number_status_indicator_code_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.1.0', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.2.1.3.2.4.17.70', 'system': 'urn:ietf:rfc:3986' }], 'description': 'A ValueSet that identifies the trace status of the NHS number.  The CodeSystem is comprised of codes from the NHS Data Model and Dictionary: NHS Number Status Indicator Code.' }
const CareConnectNHSNumberVerificationStatus1 = new CareConnectBaseValueSet(vsJsn)
CareConnectNHSNumberVerificationStatus1.code_systems = []
CareConnectNHSNumberVerificationStatus1.needs_snomed = false
CareConnectNHSNumberVerificationStatus1.code_systems.push(CareConnectNHSNumberVerificationStatus1CodeSystem)
module.exports = CareConnectNHSNumberVerificationStatus1
