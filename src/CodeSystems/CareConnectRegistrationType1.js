// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-RegistrationType-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Regular', 'code': 'R' }, { 'display': 'Emergency', 'code': 'E' }, { 'display': 'Immediately necessary', 'code': 'IN' }, { 'display': 'Temporary', 'code': 'T' }, { 'display': 'Private', 'code': 'P' }, { 'display': 'Other', 'code': 'O' }, { 'display': 'Synthetic Record', 'code': 'S' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-RegistrationType-1', 'name': 'Care Connect Registration Type', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-RegistrationType-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2017-08-01T00:00:00+00:00', 'version': '1.0.0', 'content': 'complete', 'description': 'A CodeSystem that identifies the type of registration for a patient at a healthcare organisation.' }

const CareConnectRegistrationType1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectRegistrationType1
