
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Location-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "A postal code specified in an address", 
            "name": "address-postalcode", 
            "type": "string"
        }, 
        {
            "documentation": "An identifier for the location", 
            "name": "identifier", 
            "type": "token"
        }
    ], 
    "type": "Location"
}
}
