// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-PrescribedElsewhere-1
const CareConnectPrescribedElsewhere1CodeSystem = require('../../src/CodeSystems/CareConnectPrescribedElsewhere1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the type of organisation/setting responsible for authorising and issuing medication outside of a GP system.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PrescribedElsewhere-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-PrescribedElsewhere-1', 'name': 'Care Connect Prescribed Elsewhere', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-PrescribedElsewhere-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-05-14T00:00:00+00:00' }
const CareConnectPrescribedElsewhere1 = new CareConnectBaseValueSet(vsJsn)
CareConnectPrescribedElsewhere1.code_systems = []
CareConnectPrescribedElsewhere1.needs_snomed = false
CareConnectPrescribedElsewhere1.code_systems.push(CareConnectPrescribedElsewhere1CodeSystem)
module.exports = CareConnectPrescribedElsewhere1
