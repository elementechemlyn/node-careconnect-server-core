// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-OutcomeOfAttendance-1
const CareConnectOutcomeOfAttendance1CodeSystem = require('../../src/CodeSystems/CareConnectOutcomeOfAttendance1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'resourceType': 'ValueSet', 'id': 'CareConnect-OutcomeOfAttendance-1', 'name': 'NHS Data Model and Dictionary Outcome Of Attendance', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-OutcomeOfAttendance-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/o/out/outcome_of_attendance_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.1.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-OutcomeOfAttendance-1' }] }, 'description': 'This records the outcome of an Out-Patient Attendance Consultant.' }
const CareConnectOutcomeOfAttendance1 = new CareConnectBaseValueSet(vsJsn)
CareConnectOutcomeOfAttendance1.code_systems = []
CareConnectOutcomeOfAttendance1.needs_snomed = false
CareConnectOutcomeOfAttendance1.code_systems.push(CareConnectOutcomeOfAttendance1CodeSystem)
module.exports = CareConnectOutcomeOfAttendance1
