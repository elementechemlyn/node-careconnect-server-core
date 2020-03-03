// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ProcedureCode-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK with the expression (<<71388002 |Procedure|<<129125009 |Procedure with explicit context|).', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(<<71388002 |Procedure|<<129125009 |Procedure with explicit context|)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-ProcedureCode-1', 'name': 'Care Connect Procedure Code', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ProcedureCode-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectProcedureCode1 = new CareConnectBaseValueSet(vsJsn)
CareConnectProcedureCode1.code_systems = []
CareConnectProcedureCode1.needs_snomed = true
module.exports = CareConnectProcedureCode1
