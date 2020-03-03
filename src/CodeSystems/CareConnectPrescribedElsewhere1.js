// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PrescribedElsewhere-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Out of Hours', 'code': 'out-of-hours' }, { 'display': 'Hospital', 'code': 'hospital' }, { 'display': 'Dental', 'code': 'dental' }, { 'display': 'Other Organisation', 'code': 'other-organisation' }, { 'display': 'Hand Written', 'code': 'hand-written' }, { 'display': 'Self Prescribed', 'code': 'self-prescribed' }, { 'display': 'Private', 'code': 'private' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-PrescribedElsewhere-1', 'name': 'Care Connect Prescribed Elsewhere', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PrescribedElsewhere-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-05-14T00:00:00+00:00', 'version': '1.0.0', 'content': 'complete', 'description': 'A CodeSystem to identify the type of organisation/setting responsible for authorising and issuing medication outside of a GP system.' }

const CareConnectPrescribedElsewhere1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectPrescribedElsewhere1
