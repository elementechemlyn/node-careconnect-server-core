// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionCategory-1
const CareConnectConditionCategory1CodeSystem = require('../../src/CodeSystems/CareConnectConditionCategory1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the category of a condition.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionCategory-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-ConditionCategory-1', 'name': 'Care Connect Condition Category', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionCategory-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00' }
const CareConnectConditionCategory1 = new CareConnectBaseValueSet(vsJsn)
CareConnectConditionCategory1.code_systems = []
CareConnectConditionCategory1.needs_snomed = false
CareConnectConditionCategory1.code_systems.push(CareConnectConditionCategory1CodeSystem)
module.exports = CareConnectConditionCategory1
