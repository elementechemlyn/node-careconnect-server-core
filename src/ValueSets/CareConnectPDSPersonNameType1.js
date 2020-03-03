// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-PDS-PersonNameType-1
const CareConnectPDSPersonNameType1CodeSystem = require('../../src/CodeSystems/CareConnectPDSPersonNameType1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code to identify the type of a name of a Person.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PDS-PersonNameType-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-PDS-PersonNameType-1', 'name': 'PDS Person Name Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-PDS-PersonNameType-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00' }
const CareConnectPDSPersonNameType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectPDSPersonNameType1.code_systems = []
CareConnectPDSPersonNameType1.needs_snomed = false
CareConnectPDSPersonNameType1.code_systems.push(CareConnectPDSPersonNameType1CodeSystem)
module.exports = CareConnectPDSPersonNameType1
