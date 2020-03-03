
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Organization-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Any identifier for the organization (not the accreditation issuer's identifier)", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "A portion of the organization's name or alias", 
            "name": "name", 
            "type": "string"
        }
    ], 
    "type": "Organization"
}
}
