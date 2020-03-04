# Node CareConnect Server Core

__**Work In Progress**__

The classes in this library are automatically generated from StrucutreDefinitions and as such
minor differences in the format of the CareConnect StrucutreDefinitions can lead to differences
in the functionality of the generated classes.

## Introduction 
Node CareConnect Server is a library for building Care Connect servers and clients. It is based on the excellent [Node Fhir Server Core Library](https://github.com/Asymmetrik/node-fhir-server-core).  

The library extends the core library to include features specific to the Care Connect FHIR profiles:  

  * Classes to build and parse Care Connect FHIR messages
  * Functions to help work with Care Connect specific structures
  * Automatic generation of Care Connect metadata/Capability Statements
  
## Getting Started

The Care Connect library can be installed using npm directly from Git:  

`npm install https://github.com/elementechemlyn/node-careconnect-server-core.git`  

Or by cloning the repository and running npm install:  

```
git clone https://github.com/elementechemlyn/node-careconnect-server-core.git  
cd node-careconnect-server-core  
npm --save install
```

## Running the tests

Tests can be run using the command:  

`npm test`

## Care Connect specific classes
The classes are not manually coded but are built from the structure differentials using the Python scripts in Scripts/BuildJS.

All STU3 Codesets, Valuesets, Extensions and Profiles listed at:

https://fhir.hl7.org.uk/

are included except:
* Profiles which use slices without a discriminator
* Profiles which use slices with non-fixed value discriminators

Codesets, Valuesets and Extensions have corresponding test suites built but the profile test
suites are manually built. Profiles with tests are:

* CareConnectPatient1
* CareConnectOrganization1
* CareConnectLocation1


See the README in Scripts/BuildJS for details on re-building the classes.

See the src/Profiles/tests folder for the latest set of Profile tests.

## Use The Library
The classes are intended to simplify as much as possible of building or using CareConnect FHIR structures.
Documentation is a work in progress so checking out the profile test scripts and the classes themselves
is recommended for a full understanding at this stage. Briefly though:

### Profiles
The classes will automatically set the correct profile urls and provide helper functions to deal with CareConnect specific extensions and slices.

Classes provide named slice functions where possible. e.g The CareConnectPatient1 class provides two
functions for adding and retrieving  Identifiers:

  * `nhsNumberIdentifier` which will return any identifer with the NHS Number system.
  * `otherIdentifier` which will return any identifer without the NHS Number system.

The profile classes can be constructed in two different ways:

  * With a FHIR JSON resource.
  When constructed with a FHIR resource the objects are by default in "read only" mode. Calling a
  getter for a Care Connect specific extension will only return an object if it was included in
  the FHIR JSON.

  * As an empty resource. 
  When constructed empty the objects are a by default in "manufacture mode". Calling a getter for a 
  Care Connect specific extension will create a new instance of the extension e.g.

  `patient.ethnicCategory`

  will create an instance of the ExtensionCareConnectEthnicCategory1 class and add it to the 
  list of extensions in the patient object. A list is returned even when the maximum cardinality of 
  the extension is 1 (because the getter filters the list of extensions to include only enthnic category extensions).
  
  The classes will attempt to honour cardinality for extensions and replace an existing 
  extension of the same type if it already exists and the maximum cardinality is one.

### Extensions
The Extension classes set the correct url and provide helper functions for CareConnect specific extentions and slices. For example the ExtensionCareConnectEncounterTrasport1 class provides:

  * A reasonForTransport getter/setter to get/set the reasonForTransport extension

The classes also provide functions to set the relevant value property of an extension. For example
the ExtensionCareConnectEthnicCategory1 provides:

  * A getter\setter called `codeableConcept` to set the valueCodeableConcept value of the extension.

A named slice in an extension gets a specific getter/setter. For example ExtensionCareConnectNHSCommunication1
provides:

  * A getter\setter called `preferred` to set the valueBoolean

N.B At this stage, unlike the Profile classes, Extension classes will not automatically build components of 
the right type. They must be expclitly created and set.

### Valuesets
Where a valueset uses a single codesystem that is included in the classes then the display and system 
values are automatically added. e.g.

`patient.ethnicCategory[0].codeableConcept = 'A'`

Will also set the system and display value ('British, Mixed British' in this example)


Values from sets that use Snomed or multiple Codesystems must be specified fully. e.g.

```
patient.religiousAffiliation.codeableConcept = {
        'system': 'http://snomed.info/sct', 'code': '428506007', 'display': 'Druid, follower of religion' }
```

## Examples

Note that the examples have been written to not rely on any external dependencies so should not be 
used for anything other than reference.

### Using the library to run a Care Connect server
The odsproxy example in the samples folder can be run using:

`npm run odssample`

It demonstrates loading data from one API (the NHSD ODS API) and serving it as a Care Connect API. 

N.B You almost certainly don't want to use this example for anything real - it maps from a level 3 profile to a level 2 profile so loses data. It is purely for demonstrating building and serving objects using the library.

### Using the library to build a Care Connect client
The Patient Banner example in the samples folder can be run using:

`npm run bannersample`

It demonstrates retrieving data from a Care Connect server and displaying it in a simple web app.

### Running a Care Connect Server

All configurations and functions of the core library are available in this library.

See the [Node Fhir Server Wiki](https://github.com/Asymmetrik/node-fhir-server-core/wiki) for full details of all configuration options.  

Additionally - this library introduces a few extra features:

  * There is no need to specify a FHIR version in the server config. CareConnect is (currently) version 3.0.1.
  * This library exports all FHIR classes directly rather than using the core libraries functions to retrieve classes by FHIR version. e.g.  

`const CareConnectOrganisation = require(CareConnect.resources.STU3.CareConnectOrganisation)` 

Level 1 classes are also available from the same place. e.g.  

`const Bundle = require(CareConnect.resources.STU3.Bundle)`  

Take a look at the index.js file to see all the classes available and the samples for how to include them.  

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details of the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

JSON representations of resources used in and by this project are Copyright © HL7.org 2011+

HL7® and FHIR® are the registered trademarks of Health Level Seven International

