
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Procedure-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Date/Period the procedure was performed", 
            "name": "date", 
            "type": "date"
        }, 
        {
            "documentation": "Search by subject - a patient", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "Search by subject", 
            "name": "subject", 
            "type": "reference"
        }
    ], 
    "type": "Procedure"
}
}
