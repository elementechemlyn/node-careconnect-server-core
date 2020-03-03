/* eslint-disable no-unused-expressions */
const FHIRServer = require('../..')
const Identifier = require(FHIRServer.resources.STU3.Identifier)
const CareConnectOrganisation = require('../CareConnectOrganization1')
const OrganisationValidator = (require('../../Schemas/SchemaBuild.js')).Organization

const organisationFhirJson = {
  'resourceType': 'Organization',
  'id': '1',
  'meta': {
    'profile': [
      'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Organization-1'
    ]
  },
  'identifier': [
    {
      'system': 'https://fhir.nhs.uk/Id/ods-organization-code',
      'value': 'C81010'
    },
    {
      'system': 'https://fhir.nhs.uk/Id/ods-site-code',
      'value': 'RTG08'
    },
    {
      'system': 'https://connectingcare.io/organization-code',
      'value': 'FOOBAR'
    }
  ],
  'type': [
    {
      'coding': [
        {
          'system': 'http://hl7.org/fhir/organization-type',
          'code': 'prov',
          'display': 'Healthcare Provider'
        }
      ]
    }
  ],
  'name': 'The Moir Medical Centre',
  'telecom': [
    {
      'system': 'fax',
      'value': '0115 9737320',
      'use': 'work'
    }
  ],
  'address': [
    {
      'use': 'work',
      'type': 'both',
      'line': [
        'Regent Street',
        'Long Eaton'
      ],
      'city': 'Nottingham',
      'district': 'Derbyshire',
      'postalCode': 'NG10 1QQ'
    }
  ],
  'partOf': {
    'reference': 'Organization/3',
    'display': 'NHS EREWASH'
  }
}

/*
set mainLocation (value) {
  get mainLocation () {
  set organizationPeriod (value) {
  get organizationPeriod () {
*/
describe('Care Connect Organisation', function () {
  describe('Object produces valid FHIR when', function () {
    it('The constructor is empty', function () {
      let p = new CareConnectOrganisation()
      expect(OrganisationValidator(p.toJSON())).toBe(true)
    })
    it('The constructor is a FHIR resource', function () {
      let p = new CareConnectOrganisation(organisationFhirJson)
      expect(p.resourceType).toBe('Organization')
      expect(p.odsOrganisationCodeIdentifier.system).toBe('https://fhir.nhs.uk/Id/ods-organization-code')
      expect(p.odsOrganisationCodeIdentifier.value).toBe('C81010')
      expect(p.odsSiteCodeIdentifier.system).toBe('https://fhir.nhs.uk/Id/ods-site-code')
      expect(p.odsSiteCodeIdentifier.value).toBe('RTG08')
      expect(p.otherIdentifier).toBeInstanceOf(Array)
      expect(p.otherIdentifier.length).toBe(1)
      expect(p.otherIdentifier.find(ident => ident.system === 'https://connectingcare.io/organization-code')).toBeInstanceOf(Identifier)
      expect(OrganisationValidator(p.toJSON())).toBe(true)
    })
    it('The object is built declaratively', function () {
      let p = new CareConnectOrganisation()
      p.odsOrganisationCodeIdentifier.value = 'C81010'
      p.odsSiteCodeIdentifier.value = 'RTG08'
      p.otherIdentifier = { 'system': 'https://connectingcare.io/organization-code', 'value': 'YDGG2' }
      
      expect(p.resourceType).toBe('Organization')
      expect(p.odsOrganisationCodeIdentifier.system).toBe('https://fhir.nhs.uk/Id/ods-organization-code')
      expect(p.odsOrganisationCodeIdentifier.value).toBe('C81010')
      expect(p.odsSiteCodeIdentifier.system).toBe('https://fhir.nhs.uk/Id/ods-site-code')
      expect(p.odsSiteCodeIdentifier.value).toBe('RTG08')
      expect(p.otherIdentifier).toBeInstanceOf(Array)
      expect(p.otherIdentifier.length).toBe(1)
      expect(p.otherIdentifier.find(ident => ident.system === 'https://connectingcare.io/organization-code')).toBeInstanceOf(Identifier)
      expect(OrganisationValidator(p.toJSON())).toBe(true)
    })
  })
})
