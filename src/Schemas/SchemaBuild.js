var fs = require('fs')
var Ajv = require('ajv')
var ajv = new Ajv({ schemaId: 'id', sourceCode: true, allErrors: true, logger: false }) // options can be passed, e.g. {allErrors: true}
// var pack = require('ajv-pack');
var path = require('path')

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

var filePath = path.join(__dirname, './fhir.schema.json/')

let validators = {}

let items = fs.readdirSync(filePath)

for (var i = 0; i < items.length; i++) {
  if (items[i].endsWith('json') === false) {
    continue
  }
  var content = fs.readFileSync(filePath + items[i])
  var schema = JSON.parse(content)
  // ajv.addSchema(schema);
  ajv.addSchema(schema, schema.id + '.schema.json')
}
for (var x = 0; x < items.length; x++) {
  if (items[x].endsWith('json') === false) {
    continue
  }
  var c = fs.readFileSync(filePath + items[x])
  var s = JSON.parse(c)
  let validate = ajv.compile(s)
  var p = items[x].split('.')[0]
  validators[p] = validate
  // var moduleCode = pack(ajv, validate); // Should build a packed module so we can make these offline. Broken at the moment.
}

module.exports = validators
