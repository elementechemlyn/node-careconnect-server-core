
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Immunization-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Vaccination  (non)-Administration Date", 
            "name": "date", 
            "type": "date"
        }, 
        {
            "documentation": "The patient for the vaccination record", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "Immunization event status", 
            "name": "status", 
            "type": "token"
        }
    ], 
    "type": "Immunization"
}
}
