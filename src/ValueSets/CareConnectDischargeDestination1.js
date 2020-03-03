// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DischargeDestination-1
const CareConnectDischargeDestination1CodeSystem = require('../../src/CodeSystems/CareConnectDischargeDestination1.js')
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'status': 'draft', 'resourceType': 'ValueSet', 'id': 'CareConnect-DischargeDestination-1', 'name': 'NHS Data Model and Dictionary Discharge Destination', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DischargeDestination-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/d/disc/discharge_destination_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/valueset-sourceReference' }], 'version': '1.1.0', 'compose': { 'include': [{ 'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DischargeDestination-1' }] }, 'description': 'The destination of a Patient on completion of a Hospital Provider Spell, or a note that the Patient died or was a still birth.' }
const CareConnectDischargeDestination1 = new CareConnectBaseValueSet(vsJsn)
CareConnectDischargeDestination1.code_systems = []
CareConnectDischargeDestination1.needs_snomed = false
CareConnectDischargeDestination1.code_systems.push(CareConnectDischargeDestination1CodeSystem)
module.exports = CareConnectDischargeDestination1
