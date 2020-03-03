// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SourceOfReferral-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system that describes the source of the referral.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'concept', 'op': '=', 'value': '< 309013001 |Referred by person (finding)' }] }, { 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'concept', 'op': '=', 'value': '< 306098008 |Self-referral (procedure)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-SourceOfReferral-1', 'name': 'Care Connect Source of Referral', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SourceOfReferral-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2019-07-16T17:43:00+00:00' }
const CareConnectSourceOfReferral1 = new CareConnectBaseValueSet(vsJsn)
CareConnectSourceOfReferral1.code_systems = []
CareConnectSourceOfReferral1.needs_snomed = true
module.exports = CareConnectSourceOfReferral1
