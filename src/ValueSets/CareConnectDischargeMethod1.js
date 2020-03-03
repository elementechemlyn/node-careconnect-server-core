// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DischargeMethod-1
const CareConnectDischargeMethod1CodeSystem = require('../../src/CodeSystems/CareConnectDischargeMethod1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'resourceType': 'ValueSet', 'id': 'CareConnect-DischargeMethod-1', 'name': 'NHS Data Model and Dictionary Discharge Method', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DischargeMethod-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/d/disc/discharge_method_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.1.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DischargeMethod-1' }] }, 'description': 'The method of discharge from a Hospital Provider Spell.' }
const CareConnectDischargeMethod1 = new CareConnectBaseValueSet(vsJsn)
CareConnectDischargeMethod1.code_systems = []
CareConnectDischargeMethod1.needs_snomed = false
CareConnectDischargeMethod1.code_systems.push(CareConnectDischargeMethod1CodeSystem)
module.exports = CareConnectDischargeMethod1
