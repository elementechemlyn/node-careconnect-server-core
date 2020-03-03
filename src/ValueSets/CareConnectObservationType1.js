// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ObservationType-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK with the expression (<<363787002 | Observable entity|).', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(<<363787002 | Observable entity|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-ObservationType-1', 'name': 'Care Connect Observation Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ObservationType-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-10-16T00:00:00+00:00' }
const CareConnectObservationType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectObservationType1.code_systems = []
CareConnectObservationType1.needs_snomed = true
module.exports = CareConnectObservationType1
