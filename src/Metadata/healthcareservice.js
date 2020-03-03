
module.exports.makeResource = (args, logger) => {
  return {
    "searchInclude": [
        "*", 
        "Slot"
    ], 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "External identifiers for this item", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "A portion of the Healthcare service name", 
            "name": "name", 
            "type": "string"
        }
    ], 
    "type": "HealthcareService"
}
}
