
module.exports.makeResource = (args, logger) => {
  return {
    "searchInclude": [
        "Schedule:actor:service", 
        "Slot:schedule"
    ], 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "token"
        }, 
        {
            "documentation": "A Slot Identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "The Schedule Resource that we are seeking a slot within", 
            "name": "schedule", 
            "type": "reference"
        }, 
        {
            "documentation": "Appointment date/time.", 
            "name": "start", 
            "type": "date"
        }, 
        {
            "documentation": "The free/busy status of the appointment", 
            "name": "status", 
            "type": "string"
        }
    ], 
    "type": "Slot"
}
}
