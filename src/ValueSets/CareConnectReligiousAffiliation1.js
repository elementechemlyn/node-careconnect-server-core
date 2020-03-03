// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReligiousAffiliation-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'concept', 'op': 'in', 'value': '999000531000000100' }] }] }, 'resourceType': 'ValueSet', 'id': 'CareConnect-ReligiousAffiliation-1', 'name': 'Care Connect Religious Affiliation', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReligiousAffiliation-1', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00', 'version': '1.1.0', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.2.1.3.2.4.16.21', 'system': 'urn:ietf:rfc:3986' }], 'description': "A code from the SNOMED Clinical Terminology UK coding system that describes the religious or other belief system affiliation of a person. Any code from the SNOMED CT UK 'Religious Affiliation SnCT' subset with subset original id 10791000000130; the corresponding SNOMED CT UK Refset fully specified name is 'Religious or other belief system affiliation simple reference set (foundation metadata concept)' with Refset Id 999000531000000100." }
const CareConnectReligiousAffiliation1 = new CareConnectBaseValueSet(vsJsn)
CareConnectReligiousAffiliation1.code_systems = []
CareConnectReligiousAffiliation1.needs_snomed = true
module.exports = CareConnectReligiousAffiliation1