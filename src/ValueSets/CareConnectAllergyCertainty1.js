// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyCertainty-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system that describes the certainty of an allergy.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(385434005 |Improbable diagnosis| OR 2931005 |Probable diagnosis| OR 255545003 |Definite| OR 410605003 |Confirmed present|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-AllergyCertainty-1', 'name': 'Care Connect Allergy Certainty', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyCertainty-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2018-03-05T00:00:00+00:00' }
const CareConnectAllergyCertainty1 = new CareConnectBaseValueSet(vsJsn)
CareConnectAllergyCertainty1.code_systems = []
CareConnectAllergyCertainty1.needs_snomed = true
module.exports = CareConnectAllergyCertainty1
