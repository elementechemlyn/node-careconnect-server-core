import json
"""
Script to build default metadata information for the CareConnect resources.
Parses the ccri-metadat.json file downloaded from https://data.developer.nhs.uk/ccri-fhir/STU3
"""
template = """
module.exports.makeResource = (args, logger) => {
  return %s
}
"""

with open("ccri-metadata.json") as f:
    j = json.load(f)

rest = j["rest"][0]["resource"]
for resource in rest:
    resource.pop("extension",None)
    resource.pop("conditionalCreate",None)
    resource.pop("conditionalUpdate",None)
    resource.pop("interaction",None)

    f = open("../src/Metadata/%s.js" % (resource["type"].lower(),),"w")
    json_str = json.dumps(resource, sort_keys=True, indent=4)
    f.write(template % (json_str,))
    f.close()

