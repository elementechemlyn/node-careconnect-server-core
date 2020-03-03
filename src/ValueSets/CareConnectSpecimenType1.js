// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SpecimenType-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system to record a specimen type.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(<105590001 |Substance (substance)|(in which case method and site should also be populated)OR <49755003 |Morphologically abnormal structure (morphologic abnormality)|OR < 260787004 |Physical object (physical object))' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-SpecimenType-1', 'name': 'Care Connect Specimen Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SpecimenType-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2019-02-19T00:00:00+00:00' }
const CareConnectSpecimenType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectSpecimenType1.code_systems = []
CareConnectSpecimenType1.needs_snomed = true
module.exports = CareConnectSpecimenType1
