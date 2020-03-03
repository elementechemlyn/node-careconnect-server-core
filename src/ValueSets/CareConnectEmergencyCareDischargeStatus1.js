// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-EmergencyCareDischargeStatus-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': "A code from the SNOMED Clinical Terminology UK coding system that describes the status of the Patient on discharge from an Emergency Care Department. Captures whether treatment took place within the ED, if the patient was streamed to another service or if the patient left before treatment was complete. Any code from the SNOMED CT UK 'Emergency care discharge status' subset with subset original id 75041000000135; the corresponding SNOMED CT UK Refset fully specified name is 'Emergency care discharge status simple reference set (foundation metadata concept)' with Refset Id 999003021000000104.", 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'concept', 'op': 'in', 'value': '999003021000000104' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-EmergencyCareDischargeStatus-1', 'name': 'Care Connect Emergency Care Discharge Status', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-EmergencyCareDischargeStatus-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00' }
const CareConnectEmergencyCareDischargeStatus1 = new CareConnectBaseValueSet(vsJsn)
CareConnectEmergencyCareDischargeStatus1.code_systems = []
CareConnectEmergencyCareDischargeStatus1.needs_snomed = true
module.exports = CareConnectEmergencyCareDischargeStatus1
