
module.exports.makeResource = (args, logger) => {
  return {
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "The unique identifier for the questionnaire response", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "The patient that is the subject of the questionnaire response", 
            "name": "patient", 
            "type": "reference"
        }, 
        {
            "documentation": "The questionnaire the answers are provided for", 
            "name": "questionnaire", 
            "type": "reference"
        }
    ], 
    "type": "QuestionnaireResponse"
}
}
