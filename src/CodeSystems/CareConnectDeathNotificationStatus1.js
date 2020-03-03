// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DeathNotificationStatus-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Informal - death notice received via an update from a local NHS Organisation such as GP or Trust', 'code': '1' }, { 'display': 'Formal - death notice received from Registrar of Deaths', 'code': '2' }, { 'display': 'Removed', 'code': 'U' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-DeathNotificationStatus-1', 'name': 'Care Connect Death Notification Status', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DeathNotificationStatus-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-12T00:00:00+00:00', 'version': '1.1.0', 'content': 'complete', 'description': 'A CodeSystem to identify the type of death notice as held on Personal Demographics Service (PDS).' }

const CareConnectDeathNotificationStatus1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectDeathNotificationStatus1
