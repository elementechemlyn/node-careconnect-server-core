// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ACVPU-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system which describes whether a patient is mentally alert, unresponsive, responds to voice, responds to pain or is acutely confused.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(248234008 |Mentally alert| OR 300202002 |Responds to voice| OR 450847001 |Responds to pain| OR 422768004 |Unresponsive| 130987000 |Acute confusion|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-ACVPU-1', 'name': 'Care Connect ACVPU', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ACVPU-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-11-08T16:01:00+00:00' }
const CareConnectACVPU1 = new CareConnectBaseValueSet(vsJsn)
CareConnectACVPU1.code_systems = []
CareConnectACVPU1.needs_snomed = true
module.exports = CareConnectACVPU1
