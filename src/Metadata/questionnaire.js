
module.exports.makeResource = (args, logger) => {
  return {
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "A code that corresponds to one of its items in the questionnaire", 
            "name": "code", 
            "type": "token"
        }, 
        {
            "documentation": "External identifier for the questionnaire", 
            "name": "identifier", 
            "type": "token"
        }
    ], 
    "type": "Questionnaire"
}
}
