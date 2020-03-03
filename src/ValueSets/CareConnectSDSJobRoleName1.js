// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SDSJobRoleName-1
const CareConnectSDSJobRoleName1CodeSystem = require('../../src/CodeSystems/CareConnectSDSJobRoleName1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet that identifies the job role associated with the person on the smart card. This consists of a set of Role Based Access Control (RBAC) codes. This code list is externally maintained.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SDSJobRoleName-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-SDSJobRoleName-1', 'name': 'Care Connect SDS Job Role Name', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SDSJobRoleName-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectSDSJobRoleName1 = new CareConnectBaseValueSet(vsJsn)
CareConnectSDSJobRoleName1.code_systems = []
CareConnectSDSJobRoleName1.needs_snomed = false
CareConnectSDSJobRoleName1.code_systems.push(CareConnectSDSJobRoleName1CodeSystem)
module.exports = CareConnectSDSJobRoleName1
