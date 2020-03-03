// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ObservationMethod-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK with the expression (<<386053000 | Evaluation procedure|).', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(<<386053000 | Evaluation procedure|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-ObservationMethod-1', 'name': 'Care Connect Observation Method', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ObservationMethod-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-10-12T00:00:00+00:00' }
const CareConnectObservationMethod1 = new CareConnectBaseValueSet(vsJsn)
CareConnectObservationMethod1.code_systems = []
CareConnectObservationMethod1.needs_snomed = true
module.exports = CareConnectObservationMethod1
