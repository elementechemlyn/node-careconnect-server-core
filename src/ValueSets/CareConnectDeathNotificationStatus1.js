// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DeathNotificationStatus-1
const CareConnectDeathNotificationStatus1CodeSystem = require('../../src/CodeSystems/CareConnectDeathNotificationStatus1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A ValueSet to identify the type of death notice as held on Personal Demographics Service (PDS).', 'status': 'draft', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DeathNotificationStatus-1' }] }, 'resourceType': 'ValueSet', 'copyright': 'Copyright © 2016 HL7 UK', 'id': 'CareConnect-DeathNotificationStatus-1', 'name': 'Care Connect Death Notification Status', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DeathNotificationStatus-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectDeathNotificationStatus1 = new CareConnectBaseValueSet(vsJsn)
CareConnectDeathNotificationStatus1.code_systems = []
CareConnectDeathNotificationStatus1.needs_snomed = false
CareConnectDeathNotificationStatus1.code_systems.push(CareConnectDeathNotificationStatus1CodeSystem)
module.exports = CareConnectDeathNotificationStatus1
