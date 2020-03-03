// This file was auto generated from the url
// http://hl7.org/fhir/codesystem-administrative-gender.json
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'active', 'title': 'AdministrativeGender', 'resourceType': 'CodeSystem', 'text': { 'status': 'extensions', 'div': '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AdministrativeGender</h2><div><p>The gender of a person used for administrative purposes.</p>\n</div><p>This code system http://hl7.org/fhir/administrative-gender defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td><td><b>Comments</b></td></tr><tr><td style="white-space:nowrap">male<a name="administrative-gender-male"> </a></td><td>Male</td><td>Male.</td><td>Male</td></tr><tr><td style="white-space:nowrap">female<a name="administrative-gender-female"> </a></td><td>Female</td><td>Female.</td><td>Female</td></tr><tr><td style="white-space:nowrap">other<a name="administrative-gender-other"> </a></td><td>Other</td><td>Other.</td><td>The administrative gender is a value other than male/female/unknown. Where this value is selected, systems may often choose to include an extension with the localized more specific value.</td></tr><tr><td style="white-space:nowrap">unknown<a name="administrative-gender-unknown"> </a></td><td>Unknown</td><td>Unknown.</td><td>A proper value is applicable, but not known.  Usage Notes: This means the actual value is not known. If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used. No properties should be included for a datatype with this property unless:  Those properties themselves directly translate to a semantic of &quot;unknown&quot;. (E.g. a local code sent as a translation that conveys \'unknown\') Those properties further qualify the nature of what is unknown. (E.g. specifying a use code of &quot;H&quot; and a URL prefix of &quot;tel:&quot; to convey that it is the home phone number that is unknown.)</td></tr></table></div>' }, 'experimental': false, 'valueSet': 'http://hl7.org/fhir/ValueSet/administrative-gender', 'content': 'complete', 'id': 'administrative-gender', 'name': 'AdministrativeGender', 'url': 'http://hl7.org/fhir/administrative-gender', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.4.642.4.2', 'system': 'urn:ietf:rfc:3986' }], 'description': 'The gender of a person used for administrative purposes.', 'meta': { 'lastUpdated': '2019-11-01T09:29:23.356+11:00' }, 'extension': [{ 'valueCode': 'pa', 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-wg' }, { 'valueCode': 'normative', 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status' }, { 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm', 'valueInteger': 5 }, { 'valueCode': '4.0.0', 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version' }], 'concept': [{ 'display': 'Male', 'code': 'male', 'extension': [{ 'valueString': 'Male', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments' }], 'definition': 'Male.' }, { 'display': 'Female', 'code': 'female', 'extension': [{ 'valueString': 'Female', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments' }], 'definition': 'Female.' }, { 'display': 'Other', 'code': 'other', 'extension': [{ 'valueString': 'The administrative gender is a value other than male/female/unknown. Where this value is selected, systems may often choose to include an extension with the localized more specific value.', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments' }], 'definition': 'Other.' }, { 'display': 'Unknown', 'code': 'unknown', 'extension': [{ 'valueString': 'A proper value is applicable, but not known.  Usage Notes: This means the actual value is not known. If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used. No properties should be included for a datatype with this property unless:  Those properties themselves directly translate to a semantic of "unknown". (E.g. a local code sent as a translation that conveys \'unknown\') Those properties further qualify the nature of what is unknown. (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)', 'url': 'http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments' }], 'definition': 'Unknown.' }], 'version': '4.0.1', 'caseSensitive': true, 'date': '2019-11-01T09:29:23+11:00' }

const administrativegender = new BaseCodeSystem(csJsn)
module.exports = administrativegender
