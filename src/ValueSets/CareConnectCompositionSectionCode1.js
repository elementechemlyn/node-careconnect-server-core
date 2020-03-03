// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-CompositionSectionCode-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK with the expression (^999001721000000100 | Clinical record headings simple reference set (foundation metadata concept)|).', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(^999001721000000100 | Clinical record headings simple reference set (foundation metadata concept)|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-CompositionSectionCode-1', 'name': 'Care Connect Composition Section Code', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-CompositionSectionCode-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectCompositionSectionCode1 = new CareConnectBaseValueSet(vsJsn)
CareConnectCompositionSectionCode1.code_systems = []
CareConnectCompositionSectionCode1.needs_snomed = true
module.exports = CareConnectCompositionSectionCode1
