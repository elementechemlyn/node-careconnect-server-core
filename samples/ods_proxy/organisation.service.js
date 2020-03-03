/**
 * @Description An (rather pointless) example service to map ODS FHIR to Care Connect FHIR
 */
const CareConnect = require('../..')
const CareConnectOrganisation = require(CareConnect.resources.STU3.CareConnectOrganization1)
const { loggers } = require('@asymmetrik/node-fhir-server-core')
const logger = loggers.get('default')

const https = require('https')

// Each method must return a promise and will receive a set of sanitized arguments and a logger instance
// The implementations here change depending on your backend, this is where you need to do your queries
// to retrieve data.

// This method is required for any profile because the server needs it to generate a conformance statement
module.exports.count = (args, context) => new Promise((resolve, reject) => {
  resolve(1)
})

// This method is for searching by id
module.exports.searchById = (args, context) => new Promise((resolve, reject) => {
  // Arguments are sanitised by the core library.
  let id = args.id
  // Make a call to the remote server.
  https.get(`https://directory.spineservices.nhs.uk/STU3/Organization/${id}`, (resp) => {
    let data = ''
    resp.on('data', (chunk) => {
      data += chunk
    })
    resp.on('end', () => {
      // Parse response into generic object.
      const nhsODS = JSON.parse(data)
      // Did we get an organization (or an error)?
      if (nhsODS.resourceType === 'Organization') {
        // Find the ODS period extension.
        const nhsPeriod = nhsODS.extension.find(ext => ext.url === 'https://fhir.nhs.uk/STU3/StructureDefinition/Extension-ODSAPI-ActivePeriod-1')
        let ccOrg = new CareConnectOrganisation()
        // Copy some values "as is".
        ccOrg.name = nhsODS.name
        ccOrg.address = nhsODS.address
        // Make a Care Connect Org Code using the value from the response.
        ccOrg.odsOrganisationCode = { 'value': nhsODS.identifier.value }
        // Make a Care Connect Org Period using the values from the response.
        ccOrg.organisationPeriod = { 'start': nhsPeriod.valuePeriod.start, 'end': nhsPeriod.valuePeriod.end }
        resolve(ccOrg)
      } else {
        // Just send the diagnostics as an error. #ImproveMe.
        // This will make an OperationOutcome.
        reject(new Error(nhsODS.issue[0].diagnostics))
      }
    })
  }).on('error', (err) => {
    // This will make an OperationOutcome.
    logger.error(err)
    reject(err)
  })
})
