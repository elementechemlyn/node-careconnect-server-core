
module.exports.makeResource = (args, logger) => {
  return {
    "profile": {
        "reference": "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare"
    }, 
    "searchParam": [
        {
            "documentation": "The ID of the resource", 
            "name": "_id", 
            "type": "string"
        }, 
        {
            "documentation": "Business Identifier(s) relevant for this EpisodeOfCare", 
            "name": "identifier", 
            "type": "token"
        }, 
        {
            "documentation": "The patient who is the focus of this episode of care", 
            "name": "patient", 
            "type": "reference"
        }
    ], 
    "type": "EpisodeOfCare"
}
}
