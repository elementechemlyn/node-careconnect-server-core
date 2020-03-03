// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-CareSettingType-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': "A code from the SNOMED Clinical Terminology UK coding system that describes a correspondence care setting type. Any code from the SNOMED CT UK 'Correspondence Care setting type' subset with subset original id 43971000000130; the corresponding SNOMED CT UK Refset fully specified name is 'Correspondence care setting type simple reference set (foundation metadata concept)' with Refset Id 999000381000000107", 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'concept', 'op': 'in', 'value': '999000381000000107' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-CareSettingType-1', 'name': 'Care Connect Care Setting Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-CareSettingType-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectCareSettingType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectCareSettingType1.code_systems = []
CareConnectCareSettingType1.needs_snomed = true
module.exports = CareConnectCareSettingType1
