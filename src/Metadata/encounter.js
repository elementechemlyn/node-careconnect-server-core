
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Encounter-1"
    }, 
    "searchInclude": [
        "*", 
        "Composition:encounter", 
        "Condition:context", 
        "DocumentReference:context", 
        "Encounter:location", 
        "Encounter:part-of", 
        "Encounter:participant", 
        "Encounter:patient", 
        "Encounter:service-provider", 
        "Immunization:encounter", 
        "MedicationAdministration:context", 
        "MedicationDispense:context", 
        "MedicationRequest:context", 
        "Observation:context", 
        "Procedure:context", 
        "ReferralRequest:encounter"
    ], 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "A date within the period the Encounter lasted", 
            "name": "date", 
            "type": "date"
        }, 
        {
            "documentation": "The patient ro group present at the encounter", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "planned | arrived | triaged | in-progress | onleave | finished | cancelled +", 
            "name": "status", 
            "type": "token"
        }, 
        {
            "documentation": "Specific type of encounter", 
            "name": "type", 
            "type": "token"
        }
    ], 
    "type": "Encounter"
}
}
