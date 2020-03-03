// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergySeverity-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system that describes the severity of an allergy.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(255604002 |Mild| OR 6736007 |Moderate| OR 24484000 |Severe| OR 399166001 |Fatal| 442452003 |Life threatening severity|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-AllergySeverity-1', 'name': 'Care Connect Allergy Severity', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergySeverity-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00' }
const CareConnectAllergySeverity1 = new CareConnectBaseValueSet(vsJsn)
CareConnectAllergySeverity1.code_systems = []
CareConnectAllergySeverity1.needs_snomed = true
module.exports = CareConnectAllergySeverity1
