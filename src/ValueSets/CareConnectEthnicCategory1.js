// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-EthnicCategory-1
const CareConnectEthnicCategory1CodeSystem = require('../../src/CodeSystems/CareConnectEthnicCategory1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-EthnicCategory-1' }] }, 'resourceType': 'ValueSet', 'id': 'CareConnect-EthnicCategory-1', 'name': 'Care Connect Ethnic Category', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-EthnicCategory-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/data_field_notes/p/pds/pds_ethnic_category_code_de.asp?shownav=0', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.1.0', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.2.1.3.2.4.16.6', 'system': 'urn:ietf:rfc:3986' }], 'description': 'A ValueSet to identify the ethnicity of a Person, as specified by the Person. This vocabulary describes a persons ethnic category, it is an extension of the Ethnic Category Code described in the NHS Data Model and Dictionary.' }
const CareConnectEthnicCategory1 = new CareConnectBaseValueSet(vsJsn)
CareConnectEthnicCategory1.code_systems = []
CareConnectEthnicCategory1.needs_snomed = false
CareConnectEthnicCategory1.code_systems.push(CareConnectEthnicCategory1CodeSystem)
module.exports = CareConnectEthnicCategory1
