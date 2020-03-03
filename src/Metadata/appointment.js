
module.exports.makeResource = (args, logger) => {
  return {
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "The style of appointment or patient that has been booked in the slot (not service type)", 
            "name": "appointment-type", 
            "type": "string"
        }, 
        {
            "documentation": "An Identifier of the Appointment", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "The overall status of the appointment", 
            "name": "status", 
            "type": "string"
        }
    ], 
    "type": "Appointment"
}
}
