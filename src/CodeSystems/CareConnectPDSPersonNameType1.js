// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PDS-PersonNameType-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Usual (current) name', 'code': 'L' }, { 'display': 'Alias name', 'code': 'A' }, { 'display': 'Preferred name', 'code': 'PREFERRED' }, { 'display': 'Other previous name', 'code': 'PREVIOUS' }, { 'display': 'Bachelor name', 'code': 'PREVIOUS-BACHELOR' }, { 'display': 'Birth name', 'code': 'PREVIOUS-BIRTH' }, { 'display': 'Maiden name', 'code': 'PREVIOUS-MAIDEN' }], 'resourceType': 'CodeSystem', 'caseSensitive': true, 'id': 'CareConnect-PDS-PersonNameType-1', 'name': 'PDS Person Name Type', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-PDS-PersonNameType-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-02T00:00:00+00:00', 'version': '1.1.0', 'content': 'complete', 'description': 'A code to identify the type of a name of a Person.' }

const CareConnectPDSPersonNameType1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectPDSPersonNameType1
