// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ListWarningCode-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Confidential Items', 'code': 'confidential-items', 'definition': 'Items excluded due to confidentiality and/or patient preferences.' }, { 'display': 'Data in Transit', 'code': 'data-in-transit', 'definition': 'Patient record transfer from previous GP practice not yet complete; any information recorded before dd-mmm-yyyy has been excluded.' }, { 'display': 'Data Awaiting Filing', 'code': 'data-awaiting-filing', 'definition': 'Patient data may be incomplete as there is data supplied by a third party awaiting review before becoming available.' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-ListWarningCode-1', 'name': 'Care Connect List Warning Code', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ListWarningCode-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00', 'version': '1.2.0', 'content': 'complete', 'description': 'A CodeSystem to identify the reason a list may be incomplete.' }

const CareConnectListWarningCode1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectListWarningCode1
