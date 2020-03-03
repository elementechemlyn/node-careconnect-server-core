// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SpecimenBodySite-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system to record a specimen body site.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(< 442083009 Anatomical or acquired body structure OR < 49755003 Morphologically abnormal structure)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-SpecimenBodySite-1', 'name': 'Care Connect Specimen Body Site', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SpecimenBodySite-1', 'version': '2.1.0', 'publisher': 'HL7 UK', 'date': '2019-06-17T00:00:00+00:00' }
const CareConnectSpecimenBodySite1 = new CareConnectBaseValueSet(vsJsn)
CareConnectSpecimenBodySite1.code_systems = []
CareConnectSpecimenBodySite1.needs_snomed = true
module.exports = CareConnectSpecimenBodySite1
