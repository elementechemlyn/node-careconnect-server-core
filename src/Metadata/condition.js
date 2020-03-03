
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Condition-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Date record was believed accurate", 
            "name": "asserted-date", 
            "type": "date"
        }, 
        {
            "documentation": "The category of the condition", 
            "name": "category", 
            "type": "token"
        }, 
        {
            "documentation": "The clinical status of the condition", 
            "name": "clinical-status", 
            "type": "token"
        }, 
        {
            "documentation": "Who has the condition?", 
            "name": "patient", 
            "type": "reference"
        }
    ], 
    "type": "Condition"
}
}
