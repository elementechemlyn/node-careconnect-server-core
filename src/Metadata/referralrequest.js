
module.exports.makeResource = (args, logger) => {
  return {
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Business identifier", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "Who the referral is about", 
            "name": "patient", 
            "type": "reference"
        }
    ], 
    "type": "ReferralRequest"
}
}
