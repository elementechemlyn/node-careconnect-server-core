// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-InspiredOxygen-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system which describes whether a patient requires oxygen or is breathing room air.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(722742002 |Breathing room air| OR 371825009 |Patient on oxygen|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-InspiredOxygen-1', 'name': 'Care Connect Inspired Oxygen', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-InspiredOxygen-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-10-19T00:00:00+00:00' }
const CareConnectInspiredOxygen1 = new CareConnectBaseValueSet(vsJsn)
CareConnectInspiredOxygen1.code_systems = []
CareConnectInspiredOxygen1.needs_snomed = true
module.exports = CareConnectInspiredOxygen1
