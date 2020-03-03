// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionEpisodeSnCT-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system that describes the episodicity of a Condition.', 'status': 'draft', 'compose': { 'include': [{ 'concept': [{ 'display': 'First episode', 'code': '255217005' }, { 'display': 'New episode', 'code': '288527008' }, { 'display': 'Ongoing episode', 'code': '303350001' }, { 'display': 'Old episode', 'code': '272131007' }, { 'display': 'Undefined episodicity', 'code': '394846009' }], 'system': 'http://snomed.info/sct' }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-ConditionEpisodeSnCT-1', 'name': 'Care Connect Condition Episode SnCT', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ConditionEpisodeSnCT-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-05-03T00:00:00+00:00' }
const CareConnectConditionEpisodeSnCT1 = new CareConnectBaseValueSet(vsJsn)
CareConnectConditionEpisodeSnCT1.code_systems = []
CareConnectConditionEpisodeSnCT1.needs_snomed = true
module.exports = CareConnectConditionEpisodeSnCT1
