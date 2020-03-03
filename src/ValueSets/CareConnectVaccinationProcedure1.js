// This file was auto generated from the url
// https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-VaccinationProcedure-1
const CareConnectBaseValueSet = require('../BaseClasses/CareConnect-BaseValueSet')
let vsJsn = { 'description': 'A code from the SNOMED Clinical Terminology UK coding system to record a vaccination procedure.', 'status': 'draft', 'compose': { 'include': [{ 'system': 'http://snomed.info/sct', 'filter': [{ 'property': 'constraint', 'op': '=', 'value': '(<<33879002 OR <<713404003 OR <<955641000000103 OR <<955691000000108 OR <<955701000000108 OR <<957581000000102 OR <<957751000000103 OR <<1066171000000108 OR <<140611000119104 OR <<15483003 OR <<39343008 OR <<34631000 OR <<72093006 OR <<425897001 OR <<8605003 OR <<428502009 OR <<283451000000105 OR <<308753004 OR <<572481000119103 OR <<965851000000105 OR <<761841000 OR <<16300531000119107 OR <<14747002 OR <<283431000000103 OR <<427633002) MINUS (<<304250009 OR <<51116004 OR <<296811004 OR <<294631000 OR <<425457005 OR <<291705006 OR <<417451006 OR <<47988006 OR <<293095001 OR <<601000000100 OR <<123471000119103 OR <<266758009 OR <<223464006 OR <<185324002 OR <<416064006 OR <<428119001 OR <<308433002 OR <<183944003 OR <<408864009 OR <<202111000000106 OR <<708538000 OR <<418019003 OR <<416237000 OR <<400999005 OR <<309370004)' }] }] }, 'resourceType': 'ValueSet', 'copyright': 'This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.', 'id': 'CareConnect-VaccinationProcedure-1', 'name': 'Care Connect Vaccination Procedure', 'url': 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-VaccinationProcedure-1', 'version': '1.1.0', 'publisher': 'HL7 UK', 'date': '2018-11-01T00:00:00+00:00' }
const CareConnectVaccinationProcedure1 = new CareConnectBaseValueSet(vsJsn)
CareConnectVaccinationProcedure1.code_systems = []
CareConnectVaccinationProcedure1.needs_snomed = true
module.exports = CareConnectVaccinationProcedure1