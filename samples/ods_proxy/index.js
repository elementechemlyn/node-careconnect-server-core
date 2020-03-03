/**
 * @Module An example use of the Care Connect library to proxy a non Care Connect API into a Care Connect one
 */
let path = require('path')
const CareConnect = require('../..')
const { loggers } = require('@asymmetrik/node-fhir-server-core')
const logger = loggers.get('default')

let config = {
  profiles: {
    // See https://github.com/Asymmetrik/node-fhir-server-core/wiki/Profile#supported-profiles
    // for all the profiles supported and what the keys are.
    organization: {
      service: path.resolve(__dirname, 'organisation.service.js')
      // Don't need to specify version. Care Connect is allways version 3.
      // Metadata will be added by care_connect_initialise function/
      // To override the built in metadata - specify your own module. e.g.
      // metadata: path.resolve('./organisation.custom.metadata.js')
    }
  },
  server: {
    corsOptions: {}
  },
  logging: {
    level: 'debug'
  }
}

// Let's create an instance of our server, there are more advanced ways to create the server if you need
// more flexibility, documentation for that is coming soon
let server = CareConnect.care_connect_initialise(config)
logger.info('Care Connect FHIR Server successfully validated.')
// Start our server on port 3000
server.listen(3000, () => {
  logger.info('FHIR Server listening on localhost:' + 3000)
  logger.info('Metadata available at:http://localhost:3000/3_0_1/metadata')
  logger.info('Retrieve Org data by id e.g. http://localhost:3000/3_0_1/Organization/YDDG2')
}
)
