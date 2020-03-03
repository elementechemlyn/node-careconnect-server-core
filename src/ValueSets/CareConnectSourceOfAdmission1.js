// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SourceOfAdmission-1
const CareConnectSourceOfAdmission1CodeSystem = require('../../src/CodeSystems/CareConnectSourceOfAdmission1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'resourceType': 'ValueSet', 'id': 'CareConnect-SourceOfAdmission-1', 'name': 'NHS Data Model and Dictionary Source Of Admission', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SourceOfAdmission-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/s/smo/source_of_admission_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.1.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-SourceOfAdmission-1' }] }, 'description': 'The source of admission to a Hospital Provider Spell or a Nursing Episode when the Patient is in a Hospital Site or a Care Home.' }
const CareConnectSourceOfAdmission1 = new CareConnectBaseValueSet(vsJsn)
CareConnectSourceOfAdmission1.code_systems = []
CareConnectSourceOfAdmission1.needs_snomed = false
CareConnectSourceOfAdmission1.code_systems.push(CareConnectSourceOfAdmission1CodeSystem)
module.exports = CareConnectSourceOfAdmission1
