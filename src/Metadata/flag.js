
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Flag-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Business identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "The identity of a subject to list flags for", 
            "name": "patient", 
            "type": "reference"
        }
    ], 
    "type": "Flag"
}
}
