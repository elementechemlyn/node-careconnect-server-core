
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "active | inactive | resolved", 
            "name": "clinical-status", 
            "type": "token"
        }, 
        {
            "documentation": "Date record was believed accurate", 
            "name": "date", 
            "type": "date"
        }, 
        {
            "documentation": "Who the sensitivity is for", 
            "name": "patient", 
            "type": "reference"
        }
    ], 
    "type": "AllergyIntolerance"
}
}
