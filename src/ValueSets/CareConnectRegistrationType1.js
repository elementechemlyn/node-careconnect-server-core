// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-RegistrationType-1
const CareConnectRegistrationType1CodeSystem = require('../../src/CodeSystems/CareConnectRegistrationType1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet that identifies the type of registration for a patient at a healthcare organisation.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-RegistrationType-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-RegistrationType-1', 'name': 'Care Connect Registration Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-RegistrationType-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2017-08-01T00:00:00+00:00' }
const CareConnectRegistrationType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectRegistrationType1.code_systems = []
CareConnectRegistrationType1.needs_snomed = false
CareConnectRegistrationType1.code_systems.push(CareConnectRegistrationType1CodeSystem)
module.exports = CareConnectRegistrationType1
