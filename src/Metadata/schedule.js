
module.exports.makeResource = (args, logger) => {
  return {
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for", 
            "name": "actor", 
            "type": "string"
        }, 
        {
            "documentation": "A Schedule Identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "The type of appointments that can be booked into associated slot(s)", 
            "name": "type", 
            "type": "token"
        }
    ], 
    "type": "Schedule"
}
}
