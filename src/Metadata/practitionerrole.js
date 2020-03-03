
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-PractitionerRole-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "A practitioner's Identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "The identity of the organization the practitioner represents / acts on behalf of", 
            "name": "organization", 
            "type": "reference"
        }, 
        {
            "documentation": "Practitioner that is able to provide the defined services for the organation", 
            "name": "practitioner", 
            "type": "reference"
        }
    ], 
    "type": "PractitionerRole"
}
}
