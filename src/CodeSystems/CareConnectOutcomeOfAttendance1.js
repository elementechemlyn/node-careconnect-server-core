// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-OutcomeOfAttendance-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': "Discharged from Consultant's care (last attendance)", 'code': '1' }, { 'display': 'Another Appointment given', 'code': '2' }, { 'display': 'Appointment to be made at a later date', 'code': '3' }], 'resourceType': 'CodeSystem', 'id': 'CareConnect-OutcomeOfAttendance-1', 'name': 'NHS Data Model and Dictionary Outcome of Attendance', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-OutcomeOfAttendance-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/o/out/outcome_of_attendance_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-sourceReference' }], 'version': '1.1.0', 'content': 'complete', 'description': 'This records the outcome of an Out-Patient Attendance Consultant.' }

const CareConnectOutcomeOfAttendance1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectOutcomeOfAttendance1
