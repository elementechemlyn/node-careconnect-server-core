// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AdmissionMethod-1
const CareConnectAdmissionMethod1CodeSystem = require('../../src/CodeSystems/CareConnectAdmissionMethod1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'resourceType': 'ValueSet', 'id': 'CareConnect-AdmissionMethod-1', 'name': 'NHS Data Model and Dictionary Admission Method', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AdmissionMethod-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/a/add/admission_method_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.1.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-AdmissionMethod-1' }] }, 'description': 'The method of admission to a Hospital Provider Spell.' }
const CareConnectAdmissionMethod1 = new CareConnectBaseValueSet(vsJsn)
CareConnectAdmissionMethod1.code_systems = []
CareConnectAdmissionMethod1.needs_snomed = false
CareConnectAdmissionMethod1.code_systems.push(CareConnectAdmissionMethod1CodeSystem)
module.exports = CareConnectAdmissionMethod1
