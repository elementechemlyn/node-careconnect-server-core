// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DocumentType-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': "A code from the SNOMED Clinical Terminology UK coding system that describes a clinical document type. Any code from the SNOMED CT UK 'Document Type' subset with subset original id 44041000000135; the corresponding SNOMED CT UK Refset fully specified name is 'Correspondence document type simple reference set (foundation metadata concept)' with Refset Id 999000391000000109.", 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'concept', 'op': 'in', 'value': '999000391000000109' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-DocumentType-1', 'name': 'Care Connect Document Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DocumentType-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-05T00:00:00+00:00' }
const CareConnectDocumentType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectDocumentType1.code_systems = []
CareConnectDocumentType1.needs_snomed = true
module.exports = CareConnectDocumentType1
