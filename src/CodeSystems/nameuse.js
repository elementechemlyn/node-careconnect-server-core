// This file was auto generated from the url
// http://hl7.org/fhir/codesystem-name-use.json
const BaseCodeSystem = require('../BaseClasses/CareConnect-BaseCodeSystem')
let csJsn = { 'status': 'active', 'title': 'NameUse', 'resourceType': 'CodeSystem', 'text': { 'status': 'generated', 'div': '<div xmlns="http://www.w3.org/1999/xhtml"><h2>NameUse</h2><div><p>The use of a human name.</p>\n</div><p>This code system http://hl7.org/fhir/name-use defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td>1</td><td style="white-space:nowrap">usual<a name="name-use-usual"> </a></td><td>Usual</td><td>Known as/conventional/the one you normally use.</td></tr><tr><td>1</td><td style="white-space:nowrap">official<a name="name-use-official"> </a></td><td>Official</td><td>The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called &quot;legal name&quot;.</td></tr><tr><td>1</td><td style="white-space:nowrap">temp<a name="name-use-temp"> </a></td><td>Temp</td><td>A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.</td></tr><tr><td>1</td><td style="white-space:nowrap">nickname<a name="name-use-nickname"> </a></td><td>Nickname</td><td>A name that is used to address the person in an informal manner, but is not part of their formal or usual name.</td></tr><tr><td>1</td><td style="white-space:nowrap">anonymous<a name="name-use-anonymous"> </a></td><td>Anonymous</td><td>Anonymous assigned name, alias, or pseudonym (used to protect a person\'s identity for privacy reasons).</td></tr><tr><td>1</td><td style="white-space:nowrap">old<a name="name-use-old"> </a></td><td>Old</td><td>This name is no longer in use (or was never correct, but retained for records).</td></tr><tr><td>2</td><td style="white-space:nowrap">\xa0\xa0maiden<a name="name-use-maiden"> </a></td><td>Name changed for Marriage</td><td>A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person\'s name.</td></tr></table></div>' }, 'experimental': false, 'valueSet': 'http://hl7.org/fhir/ValueSet/name-use', 'content': 'complete', 'id': 'name-use', 'name': 'NameUse', 'url': 'http://hl7.org/fhir/name-use', 'publisher': 'HL7 (FHIR Project)', 'identifier': [{ 'value': 'urn:oid:2.16.840.1.113883.4.642.4.66', 'system': 'urn:ietf:rfc:3986' }], 'description': 'The use of a human name.', 'meta': { 'lastUpdated': '2019-11-01T09:29:23.356+11:00' }, 'extension': [{ 'valueCode': 'fhir', 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-wg' }, { 'valueCode': 'normative', 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status' }, { 'valueCode': '4.0.0', 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version' }, { 'url': 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm', 'valueInteger': 5 }], 'concept': [{ 'display': 'Usual', 'code': 'usual', 'definition': 'Known as/conventional/the one you normally use.' }, { 'display': 'Official', 'code': 'official', 'definition': 'The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".' }, { 'display': 'Temp', 'code': 'temp', 'definition': 'A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.' }, { 'display': 'Nickname', 'code': 'nickname', 'definition': 'A name that is used to address the person in an informal manner, but is not part of their formal or usual name.' }, { 'display': 'Anonymous', 'code': 'anonymous', 'definition': "Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons)." }, { 'display': 'Old', 'concept': [{ 'display': 'Name changed for Marriage', 'code': 'maiden', 'definition': "A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person's name." }], 'code': 'old', 'definition': 'This name is no longer in use (or was never correct, but retained for records).' }], 'version': '4.0.1', 'caseSensitive': true, 'date': '2019-11-01T09:29:23+11:00', 'contact': [{ 'telecom': [{ 'value': 'http://hl7.org/fhir', 'system': 'url' }, { 'value': 'fhir@lists.hl7.org', 'system': 'email' }] }] }

const nameuse = new BaseCodeSystem(csJsn)
module.exports = nameuse
