// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionEpisodicity-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'First', 'code': 'first', 'definition': 'The first episode of a condition.' }, { 'display': 'New', 'code': 'new', 'definition': 'A new episode of a previously recorded condition.' }, { 'display': 'Review', 'code': 'review', 'definition': 'A review of an existing condition episode.' }, { 'display': 'End', 'code': 'end', 'definition': 'Marks the end of an existing condition episode.' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-ConditionEpisodicity-1', 'name': 'Care Connect Condition Episodicity', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ConditionEpisodicity-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'version': '1.1.0', 'content': 'complete', 'description': 'A CodeSystem to identify the episodicity of a condition.' }

const CareConnectConditionEpisodicity1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectConditionEpisodicity1
