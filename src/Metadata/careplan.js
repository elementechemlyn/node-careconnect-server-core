
module.exports.makeResource = (args, logger) => {
  return {
    "searchInclude": [
        "*", 
        "CarePlan:care-team", 
        "CarePlan:condition", 
        "CarePlan:goal", 
        "CarePlan:patient", 
        "CarePlan:supporting-information"
    ], 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Type of plan", 
            "name": "category", 
            "type": "token"
        }, 
        {
            "documentation": "Time period plan covers", 
            "name": "date", 
            "type": "date"
        }, 
        {
            "documentation": "External Ids for this plan", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "Who care plan is for", 
            "name": "patient", 
            "type": "reference"
        }
    ], 
    "type": "CarePlan"
}
}
