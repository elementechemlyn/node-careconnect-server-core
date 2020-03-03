// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReportCodeSnCT-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system that describes a diagnotic report', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(<<371525003 | Clinical procedure report (record artifact))' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-ReportCodeSnCT-1', 'name': 'Care Connect Report Code SnCT', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReportCodeSnCT-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2019-06-14T00:00:00+00:00' }
const CareConnectReportCodeSnCT1 = new CareConnectBaseValueSet(vsJsn)
CareConnectReportCodeSnCT1.code_systems = []
CareConnectReportCodeSnCT1.needs_snomed = true
module.exports = CareConnectReportCodeSnCT1
