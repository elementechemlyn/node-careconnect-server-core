// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionRelationship-1
const CareConnectConditionRelationship1CodeSystem = require('../../src/CodeSystems/CareConnectConditionRelationship1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet that identifies the kind of relationship that exists with a target condition or problem..', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionRelationship-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2019 HL7 UK', 'id': 'CareConnect-ConditionRelationship-1', 'name': 'Care Connect Condition Relationship', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionRelationship-1', 'version': '1.2.0', 'publisher': 'HL7 UK', 'date': '2019-09-04T14:30:00+00:00' }
const CareConnectConditionRelationship1 = new CareConnectBaseValueSet(vsJsn)
CareConnectConditionRelationship1.code_systems = []
CareConnectConditionRelationship1.needs_snomed = false
CareConnectConditionRelationship1.code_systems.push(CareConnectConditionRelationship1CodeSystem)
module.exports = CareConnectConditionRelationship1
