
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Practitioner-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "A postalCode specified in an address", 
            "name": "address-postalcode", 
            "type": "string"
        }, 
        {
            "documentation": "A practitioner's Identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text", 
            "name": "name", 
            "type": "string"
        }
    ], 
    "type": "Practitioner"
}
}
