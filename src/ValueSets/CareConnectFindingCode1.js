// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-FindingCode-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system to record a finding code.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(<<404684003 | clinical findings)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-FindingCode-1', 'name': 'Care Connect Finding Code', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-FindingCode-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2019-02-19T00:00:00+00:00' }
const CareConnectFindingCode1 = new CareConnectBaseValueSet(vsJsn)
CareConnectFindingCode1.code_systems = []
CareConnectFindingCode1.needs_snomed = true
module.exports = CareConnectFindingCode1
