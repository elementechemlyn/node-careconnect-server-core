// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionCategory-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Problem List Item', 'code': 'problem-list-item', 'definition': 'An item on a problem list which can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.' }, { 'display': 'Encounter Diagnosis', 'code': 'encounter-diagnosis', 'definition': 'A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.' }, { 'display': 'Presenting Complaint', 'code': 'presenting-complaint' }, { 'display': 'Co-morbidity', 'code': 'co-morbidity' }, { 'display': 'Issue', 'code': 'issue' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-ConditionCategory-1', 'name': 'Care Connect Condition Category', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionCategory-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'version': '1.1.0', 'content': 'complete', 'description': 'A CodeSystem to identify the category of a condition.' }

const CareConnectConditionCategory1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectConditionCategory1
