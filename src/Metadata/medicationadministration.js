
module.exports.makeResource = (args, logger) => {
  return {
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Return administrations of this medication code", 
            "name": "code", 
            "type": "token"
        }, 
        {
            "documentation": "Return administrations with this external identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "Return administrations of this medication resource", 
            "name": "medication", 
            "type": "reference"
        }, 
        {
            "documentation": "The identity of a patient to list administrations  for", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "MedicationAdministration event status (for example one of active/paused/completed/nullified)", 
            "name": "status", 
            "type": "token"
        }
    ], 
    "type": "MedicationAdministration"
}
}
