// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ProblemSignificance-1
const CareConnectProblemSignificance1CodeSystem = require('../../src/CodeSystems/CareConnectProblemSignificance1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code to record the significance of a Problem Header Condition.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ProblemSignificance-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-ProblemSignificance-1', 'name': 'Care Connect Problem Significance', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ProblemSignificance-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-04-16T00:00:00+00:00' }
const CareConnectProblemSignificance1 = new CareConnectBaseValueSet(vsJsn)
CareConnectProblemSignificance1.code_systems = []
CareConnectProblemSignificance1.needs_snomed = false
CareConnectProblemSignificance1.code_systems.push(CareConnectProblemSignificance1CodeSystem)
module.exports = CareConnectProblemSignificance1
