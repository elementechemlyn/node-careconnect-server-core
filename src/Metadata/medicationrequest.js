
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-MedicationRequest-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Return prescriptions written on this date", 
            "name": "authoredon", 
            "type": "date"
        }, 
        {
            "documentation": "Return prescriptions of this medication reference", 
            "name": "medication", 
            "type": "reference"
        }, 
        {
            "documentation": "Returns prescriptions for a specific patient", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "Status of the prescription", 
            "name": "status", 
            "type": "token"
        }
    ], 
    "type": "MedicationRequest"
}
}
