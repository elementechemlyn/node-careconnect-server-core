
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1"
    }, 
    "searchInclude": [
        "*", 
        "Observation.related"
    ], 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "The classification of the type of observation", 
            "name": "category", 
            "type": "token"
        }, 
        {
            "documentation": "The code of the observation type", 
            "name": "code", 
            "type": "token"
        }, 
        {
            "documentation": "Obtained date/time. If the obtained element is a period, a date that falls in the period", 
            "name": "date", 
            "type": "date"
        }, 
        {
            "documentation": "The subject that the observation is about (if patient)", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "The subject that the observation is about", 
            "name": "subject", 
            "type": "reference"
        }
    ], 
    "type": "Observation"
}
}
