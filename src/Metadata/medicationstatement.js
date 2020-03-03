
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-MedicationStatement-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Date when patient was taking (or not taking) the medication", 
            "name": "effective", 
            "type": "date"
        }, 
        {
            "documentation": "Returns statements for a specific patient.", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "Return statements that match the given status", 
            "name": "status", 
            "type": "token"
        }
    ], 
    "type": "MedicationStatement"
}
}
