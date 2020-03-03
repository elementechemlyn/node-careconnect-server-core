
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/GPConnect-DocumentReference-1"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Document creation time", 
            "name": "created", 
            "type": "date"
        }, 
        {
            "documentation": "Who/what is the subject of the document", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "Time of service that is being documented", 
            "name": "period", 
            "type": "date"
        }, 
        {
            "documentation": "Additional details about where the content was created (e.g. clinical specialty)", 
            "name": "setting", 
            "type": "token"
        }, 
        {
            "documentation": "Kind of document (LOINC if possible)", 
            "name": "type", 
            "type": "token"
        }
    ], 
    "type": "DocumentReference"
}
}
