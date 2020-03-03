// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-EncounterType-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': "A code from the SNOMED Clinical Terminology UK coding system that describes an encounter between a care professional and the patient (or patient's record).", 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '<<185316007 OR <<308467007 OR <<185201007' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-EncounterType-1', 'name': 'Care Connect Encounter Type', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-EncounterType-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-21T00:00:00+00:00' }
const CareConnectEncounterType1 = new CareConnectBaseValueSet(vsJsn)
CareConnectEncounterType1.code_systems = []
CareConnectEncounterType1.needs_snomed = true
module.exports = CareConnectEncounterType1
