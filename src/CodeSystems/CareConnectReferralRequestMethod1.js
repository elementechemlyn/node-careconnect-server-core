// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ReferralRequestMethod-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Fax', 'code': '1' }, { 'display': 'Phone', 'code': '2' }, { 'display': 'Secure Messaging', 'code': '3' }, { 'display': 'Secure Email', 'code': '4' }, { 'display': 'Letter', 'code': '5' }, { 'display': 'NHS E-Referral Service', 'code': '6' }, { 'display': 'Self Referral', 'code': '7' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-ReferralRequestMethod-1', 'name': 'Care Connect Referral Request Method', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ReferralRequestMethod-1', 'copyright': 'Copyright © 2019 HL7 UK', 'publisher': 'HL7 UK', 'date': '2019-07-16T17:43:00+00:00', 'version': '1.0.0', 'content': 'complete', 'description': 'A CodeSystem to identify the form in which a referral is sent and received.' }

const CareConnectReferralRequestMethod1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectReferralRequestMethod1
