/* eslint-disable no-unused-expressions */
const CareConnectLocation = require('../CareConnectLocation1.js')
const locationValidator = (require('../../Schemas/SchemaBuild.js')).Location
const FHIRServer = require('../..')
const Identifier = require(FHIRServer.resources.STU3.Identifier)

const locationFhirJson = {
  'resourceType': 'Location',
  'id': '1',
  'meta': {
    'profile': [
      'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Location-1'
    ]
  },
  'identifier': [
    {
      'system': 'https://fhir.nhs.uk/Id/ods-site-code',
      'value': 'RTG08'
    },
    {
      'system': 'https://connectingcare.io/site-code',
      'value': 'FOOLOC'
    }
  ],
  'name': 'Long Eaton Clinic',
  'type': {
    'coding': [
      {
        'system': 'http://hl7.org/fhir/v3/RoleCode',
        'code': 'CSC',
        'display': 'community service center'
      }
    ]
  },
  'telecom': [
    {
      'system': 'phone',
      'value': '0115 855 4034',
      'use': 'work'
    },
    {
      'system': 'fax',
      'value': '0532 123 4567',
      'use': 'work'
    }
  ],
  'address': {
    'use': 'home',
    'type': 'postal',
    'line': [
      'Midland Street',
      'Long Eaton'
    ],
    'city': 'Nottingham',
    'district': 'Derbyshire',
    'postalCode': 'NG10 1RY'
  },
  'physicalType': {
    'coding': [
      {
        'system': 'http://hl7.org/fhir/location-physical-type',
        'code': 'bu',
        'display': 'Building'
      }
    ]
  },
  'managingOrganization': {
    'reference': 'Organization/2',
    'display': 'Derby Teaching Hospitals NHS Foundation Trust'
  }
}

describe('Care Connect Location', function () {
  describe('Object produces valid FHIR when', function () {
    it('The constructor is empty', function () {
      let p = new CareConnectLocation()
      expect(locationValidator(p.toJSON())).toBe(true)
    })
    it('The constructor is a FHIR resource', function () {
      let p = new CareConnectLocation(locationFhirJson)
      expect(p.resourceType).toBe('Location')

      expect(p.odsSiteCodeIdentifier.system).toBe('https://fhir.nhs.uk/Id/ods-site-code')
      expect(p.odsSiteCodeIdentifier.value).toBe('RTG08')
      expect(p.otherIdentifier).toBeInstanceOf(Array)
      expect(p.otherIdentifier.length).toBe(1)
      expect(p.otherIdentifier.find(ident => ident.system === 'https://connectingcare.io/site-code')).toBeInstanceOf(Identifier)
    })
    it('The object is build declarativly', function () {
      let p = new CareConnectLocation()
      p.odsSiteCodeIdentifier.value = 'RTG08'
      p.otherIdentifier = { 'system': 'https://connectingcare.io/site-code', 'value': 'YDGG2' }

      expect(p.odsSiteCodeIdentifier.system).toBe('https://fhir.nhs.uk/Id/ods-site-code')
      expect(p.odsSiteCodeIdentifier.value).toBe('RTG08')
      expect(p.otherIdentifier).toBeInstanceOf(Array)
      expect(p.otherIdentifier.length).toBe(1)
      expect(p.otherIdentifier.find(ident => ident.system === 'https://connectingcare.io/site-code')).toBeInstanceOf(Identifier)
      expect(locationValidator(p.toJSON())).toBe(true)
    })
  })
})
