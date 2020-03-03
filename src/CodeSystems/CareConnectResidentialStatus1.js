// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ResidentialStatus-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'UK Resident', 'code': 'H' }, { 'display': 'Overseas Resident', 'code': 'O' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-ResidentialStatus-1', 'name': 'Care Connect Residential Status', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ResidentialStatus-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00', 'version': '1.1.0', 'content': 'complete', 'description': 'A CodeSystem that identifies the residential status of a patient.' }

const CareConnectResidentialStatus1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectResidentialStatus1
