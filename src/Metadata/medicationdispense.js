
module.exports.makeResource = (args, logger) => {
  return {
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Return dispenses of this medicine code", 
            "name": "code", 
            "type": "token"
        }, 
        {
            "documentation": "Return dispenses with this external identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "Return dispenses of this medicine resource", 
            "name": "medication", 
            "type": "reference"
        }, 
        {
            "documentation": "The identity of a patient to list dispenses  for", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "Return dispenses with a specified dispense status", 
            "name": "status", 
            "type": "token"
        }
    ], 
    "type": "MedicationDispense"
}
}
