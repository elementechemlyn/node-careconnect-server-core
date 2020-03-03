// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReferralRequestMethod-1
const CareConnectReferralRequestMethod1CodeSystem = require('../../src/CodeSystems/CareConnectReferralRequestMethod1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the form in which a referral is sent and received.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ReferralRequestMethod-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2019 HL7 UK', 'id': 'CareConnect-ReferralRequestMethod-1', 'name': 'Care Connect Referral Request Method', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReferralRequestMethod-1', 'version': '1.0.0', 'publisher': 'HL7 UK', 'date': '2019-07-16T17:43:00+00:00' }
const CareConnectReferralRequestMethod1 = new CareConnectBaseValueSet(vsJsn)
CareConnectReferralRequestMethod1.code_systems = []
CareConnectReferralRequestMethod1.needs_snomed = false
CareConnectReferralRequestMethod1.code_systems.push(CareConnectReferralRequestMethod1CodeSystem)
module.exports = CareConnectReferralRequestMethod1
