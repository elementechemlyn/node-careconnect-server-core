// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DischargeDestination-1
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'draft', 'concept': [{ 'display': 'Usual place of residence unless listed below, for example, a private dwelling whether owner occupied or owned by Local Authority, housing association or other landlord. This includes wardened accommodation but not residential accommodation where health care is provided. It also includes Patients with no fixed abode.', 'code': '19' }, { 'display': 'Temporary place of residence when usually resident elsewhere (e.g. hotels, residential Educational Establishment)', 'code': '29' }, { 'display': 'Repatriation from high security psychiatric accommodation in an NHS Hospital Provider (NHS Trust or NHS Foundation Trust)', 'code': '30' }, { 'display': 'Court', 'code': '37' }, { 'display': 'Penal establishment or police station', 'code': '38' }, { 'display': 'High Security Psychiatric Hospital, Scotland', 'code': '48' }, { 'display': 'NHS other Hospital Provider - high security psychiatric accommodation', 'code': '49' }, { 'display': 'NHS other Hospital Provider - medium secure unit', 'code': '50' }, { 'display': 'NHS other Hospital Provider - Ward for general Patients or the younger physically disabled', 'code': '51' }, { 'display': 'NHS other Hospital Provider - Ward for maternity Patients or Neonates', 'code': '52' }, { 'display': 'NHS other Hospital Provider - Ward for Patients who are mentally ill or have Learning Disabilities', 'code': '53' }, { 'display': 'NHS run Care Home', 'code': '54' }, { 'display': 'Local Authority residential accommodation i.e. where care is provided', 'code': '65' }, { 'display': 'Local Authority foster care', 'code': '66' }, { 'display': 'Not applicable - Patient died or still birth', 'code': '79' }, { 'display': 'Non-NHS run hospital - medium secure unit', 'code': '84' }, { 'display': 'Non-NHS (other than Local Authority) run Care Home', 'code': '85' }, { 'display': 'Non NHS run hospital', 'code': '87' }, { 'display': 'Non-NHS (other than Local Authority) run Hospice', 'code': '88' }], 'resourceType': 'CodeSystem', 'id': 'CareConnect-DischargeDestination-1', 'name': 'NHS Data Model and Dictionary Discharge Destination', 'url': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DischargeDestination-1', 'copyright': 'Copyright © 2016 HL7 UK', 'publisher': 'HL7 UK', 'date': '2018-11-14T00:00:00+00:00', 'extension': [{ 'valueUri': 'http://www.datadictionary.nhs.uk/data_dictionary/attributes/d/disc/discharge_destination_de.asp?shownav=1', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-sourceReference' }], 'version': '1.1.0', 'content': 'complete', 'description': 'The destination of a Patient on completion of a Hospital Provider Spell, or a note that the Patient died or was a still birth.' }

const CareConnectDischargeDestination1 = new BaseCodeSystem(csJsn)
module.exports = CareConnectDischargeDestination1