/* eslint-disable no-unused-expressions */
const FHIRServer = require('../..')
const Identifier = require(FHIRServer.resources.STU3.Identifier)

const CareConnectPatient = require('../CareConnectPatient1.js')
const patientValidator = (require('../../Schemas/SchemaBuild.js')).Patient
const CareConnectEthnicCategory = require('../../Extensions/ExtensionCareConnectEthnicCategory1.js')
const CareConnectNHSNumberStatus = require('../../Extensions/ExtensionCareConnectNHSNumberVerificationStatus1.js')
// const CareConnectDeathNotificationStatus = require('../../Extensions/ExtensionCareConnectDeathNotificationStatus1.js')
const CareConnectNominatedPharmacy = require('../../Extensions/ExtensionCareConnectNominatedPharmacy1.js')
const CareConnectReligiousAffiliation = require('../../Extensions/ExtensionCareConnectReligiousAffiliation1.js')
const CareConnectResidentialStatus = require('../../Extensions/ExtensionCareConnectResidentialStatus1.js')
const CareConnectTreatmentCategory = require('../../Extensions/ExtensionCareConnectTreatmentCategory1.js')
const CareConnectNHSCommunication = require('../../Extensions/ExtensionCareConnectNHSCommunication1.js')
// TODO Not fully implemented
const PatientCadavericDonor = require(FHIRServer.resources.STU3.Extension)
const BirthPlace = require(FHIRServer.resources.STU3.Extension)
const Extension = require(FHIRServer.resources.STU3.Extension)
const Address = require(FHIRServer.resources.STU3.Address)

const patientFhirJson = {
  'resourceType': 'Patient',
  'meta': {
    'profile': ['https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1']
  },
  'extension': [{
    'extension': [{
      'url': 'modeOfCommunication',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityMode-1',
          'code': 'ESGN',
          'display': 'Expressed signed'
        }]
      }
    },
    {
      'url': 'modeOfCommunication',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityMode-1',
          'code': 'ESGN',
          'display': 'Expressed signed'
        }]
      }
    },
    {
      'url': 'interpreterRequired',
      'valueBoolean': false
    },
    {
      'url': 'communicationProficiency',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityProficiency-1',
          'code': 'E',
          'display': 'Excellent'
        }]
      }
    },
    {
      'url': 'modeOfCommunication',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityMode-1',
          'code': 'ESGN',
          'display': 'Expressed signed'
        }]
      }
    },
    {
      'url': 'preferred',
      'valueBoolean': true
    },
    {
      'url': 'language',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-HumanLanguage-1',
          'code': 'cy',
          'display': 'Welsh'
        }]
      }
    }],
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSCommunication-1'
  },
  {
    'url': 'http://hl7.org/fhir/StructureDefinition/birthPlace',
    'valueAddress': {
      'type': 'both',
      'line': ['10 The Street', 'Streetsville'],
      'postalCode': 'ST1 10S'
    }
  },
  {
    'extension': [{
      'url': 'modeOfCommunication',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityMode-1',
          'code': 'ESGN',
          'display': 'Expressed signed'
        }]
      }
    },
    {
      'url': 'modeOfCommunication',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityMode-1',
          'code': 'ESGN',
          'display': 'Expressed signed'
        }]
      }
    },
    {
      'url': 'interpreterRequired',
      'valueBoolean': false
    },
    {
      'url': 'communicationProficiency',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityProficiency-1',
          'code': 'E',
          'display': 'Excellent'
        }]
      }
    },
    {
      'url': 'modeOfCommunication',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-LanguageAbilityMode-1',
          'code': 'ESGN',
          'display': 'Expressed signed'
        }]
      }
    },
    {
      'url': 'Preferred',
      'valueBoolean': true
    },
    {
      'url': 'Language',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-HumanLanguage-1',
          'code': 'cy',
          'display': 'Welsh'
        }]
      }
    }],
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSCommunication-1'
  },
  {
    'url': 'http://hl7.org/fhir/StructureDefinition/patient-cadavericDonor',
    'valueBoolean': true
  },
  {
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-TreatmentCategory-1',
    'valueCodeableConcept': {
      'coding': [{
        'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-TreatmentCategory-1',
        'code': '2',
        'display': 'Exempt from payment - other'
      }]
    }
  },
  {
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ResidentialStatus-1',
    'valueCodeableConcept': {
      'coding': [{
        'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-ResidentialStatus-1',
        'code': 'H',
        'display': 'UK Resident'
      }]
    }
  },
  {
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ReligiousAffiliation-1',
    'valueCodeableConcept': {
      'coding': [{
        'system': 'http://snomed.info/sct',
        'code': '428506007',
        'display': 'Druid, follower of religion'
      }]
    }
  },
  {
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NominatedPharmacy-1',
    'valueReference': {
      'reference': 'Organisation/22',
      'display': 'Some Pharmacy'
    }
  },
  {
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-DeathNotificationStatus-1',
    'valueCodeableConcept': {
      'coding': [{
        'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-DeathNotificationStatus-1',
        'code': '2',
        'display': 'Formal - death notice received from Registrar of Deaths'
      }]
    }
  },
  {
    'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-EthnicCategory-1',
    'valueCodeableConcept': {
      'coding': [{
        'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-EthnicCategory-1',
        'code': 'A',
        'display': 'British, Mixed British'
      }]
    }
  }],
  'identifier': [{
    'extension': [{
      'url': 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSNumberVerificationStatus-1',
      'valueCodeableConcept': {
        'coding': [{
          'system': 'https://fhir.hl7.org.uk/STU3/CodeSystem/CareConnect-NHSNumberVerificationStatus-1',
          'code': '02',
          'display': 'Number present but not traced'
        }]
      }
    }],
    'system': 'https://fhir.nhs.uk/Id/nhs-number',
    'value': '9876543210'
  },
  {
    'system': 'https://fhir.leedsth.nhs.uk/Id/pas-number',
    'value': 'ABC8650149'
  },
  {
    'system': 'https://fhir.leedsth.nhs.uk/Id/PPMIdentifier',
    'value': '1'
  }],
  'active': true,
  'name': [{
    'use': 'official',
    'family': 'Kanfeld',
    'given': ['Bernie'],
    'prefix': ['Miss']
  }],
  'telecom': [{
    'system': 'phone',
    'value': '0115 9737320',
    'use': 'home'
  },
  {
    'system': 'email',
    'value': 'bernie.kanfeld@nhsdigital.nhs.uk',
    'use': 'home'
  }],
  'gender': 'female',
  'birthDate': '1998-03-13',
  'address': [{
    'use': 'work',
    'type': 'both',
    'line': ['Field Jardin',
      'Long Eaton'],
    'city': 'Nottingham',
    'district': 'Derbyshire',
    'postalCode': 'NG10 1ZZ'
  }],
  'maritalStatus': {
    'coding': [{
      'system': 'http://hl7.org/fhir/v3/MaritalStatus',
      'code': 'S',
      'display': 'Never Married'
    }]
  },
  'generalPractitioner': [{
    'reference': 'Practitioner/1',
    'display': 'Dr. AA Bhatia'
  }],
  'managingOrganization': {
    'reference': 'Organization/1',
    'display': 'The Moir Medical Centre'
  }}

//let p = new CareConnectPatient(patientFhirJson)

let p = new CareConnectPatient()
// TODO When we get an extension in a slice we want a helper class to make it
let nnnStatus = new CareConnectNHSNumberStatus()
nnnStatus.codeableConcept = '02'

p.nhsNumberIdentifier.value = '9876543210'
p.nhsNumberIdentifier.extension = nnnStatus

let otherIds = new Array(2)
let i = new Identifier()
i.system = 'https://fhir.leedsth.nhs.uk/Id/pas-number'
i.value = '1234'
otherIds[0] = i
i = new Identifier()
i.system = 'https://fhir.leedsth.nhs.uk/Id/PPMIdentifier'
i.value = '4321'
otherIds[1] = i
p.otherIdentifier = otherIds

p.ethnicCategory[0].codeableConcept = 'A'
p.religiousAffiliation[0].codeableConcept = {
  'system': 'http://snomed.info/sct', 'code': '428506007', 'display': 'Druid, follower of religion'
}
p.residentialStatus[0].codeableConcept = 'H'
p.treatmentCategory[0].codeableConcept = '2'

p.nominatedPharmacy[0].reference = { 'reference': 'Organisation/22', 'display': 'Some Pharmacy' }

p.nhsCommunication[0].preferred = true
p.nhsCommunication[0].interpreterRequired = false
p.nhsCommunication[0].communicationProficiency = { 'coding': [{ 'code': 'E', 'display': 'Excellent' }] }
p.nhsCommunication[0].modeOfCommunication = { 'coding': [{ 'code': 'ESGN', 'display': 'Expressed signed' }] }
p.nhsCommunication[0].language = { 'coding': [{ 'code': 'cy', 'display': 'Welsh' }] }

// TODO Not fully implemented (no objects built - uses the base types)
let donor = new Extension()
donor.url = 'http://hl7.org/fhir/StructureDefinition/patient-cadavericDonor'
donor.valueBoolean = true
p.patientCadavericDonor = donor

// TODO Not fully implemented (no objects built - uses the base types)
let birthPlace = new Extension()
let address = new Address()
address.type = 'both'
address.postalCode = 'ST1 10S'
address.line = ['10 The Street', 'Streetsville']

birthPlace.url = 'http://hl7.org/fhir/StructureDefinition/birthPlace'
birthPlace.valueAddress = address
p.birthPlace = birthPlace


console.log(JSON.stringify(p.toJSON()))
