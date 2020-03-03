// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-TreatmentCategory-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Exempt from payment - subject to reciprocal health agreement', 'code': '1' }, { 'display': 'Exempt from payment - other', 'code': '2' }, { 'display': 'To pay hotel fees only', 'code': '3' }, { 'display': 'To pay all fees', 'code': '4' }, { 'display': 'Charging rate not known', 'code': '9' }, { 'display': 'Not applicable', 'code': '8', 'definition': 'Not an Overseas Visitor' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-TreatmentCategory-1', 'name': 'Care Connect Treatment Category', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-TreatmentCategory-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00', 'version': '1.1.0', 'content': 'complete', 'description': 'A CodeSystem that identifies the treatment category for this patient.' }

const CareConnectTreatmentCategory1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectTreatmentCategory1
