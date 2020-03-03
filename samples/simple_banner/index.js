const url = require('url')
const http = require('http')
const https = require('https')
const CareConnect = require('../..')
const CareConnectPatient = require(CareConnect.resources.STU3.CareConnectPatient1)

const getCareConnectPatient = (nhsNumber) => {
  let promise = new Promise(function (resolve, reject) {
    https.get(`https://data.developer.nhs.uk/ccri-fhir/STU3/Patient?identifier=${nhsNumber}`, (resp) => {
      let data = ''
      resp.on('data', (chunk) => {
        data += chunk
      })
      resp.on('end', () => {
        // Parse response into generic object.
        const bundleJson = JSON.parse(data)
        // Did we get an bundle back?
        if (bundleJson.resourceType === 'Bundle') {
          const patient = bundleJson.entry[0].resource // Fingers crossed!
          const CCPatient = new CareConnectPatient(patient)
          resolve(CCPatient)
        } else {
          console.log(data)
          reject(new Error(data))
        }
      })
    }).on('error', (err) => {
      console.log(err)
      reject(new Error(err))
    }
    )
  })
  return promise
}

const app = http.createServer((request, response) => {
  var query
  query = url.parse(request.url, true).query
  if (query.nnn) {
    getCareConnectPatient(query.nnn)
      .then(function (patient) {
        // TODO. This fails to resolve the promise if there is an error.
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(`<html>
        <head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" rel="stylesheet" type="text/css"  />
        </head>
        <body>
        <div class="panel panel-default">
        <div class="panel-heading">
        <div class="row">
            <div class="col-md-5">
            <h4 class="panel-title">${patient.name[0].prefix[0]} ${patient.name[0].given[0]} ${patient.name[0].family}</h4>
            </div>
            <div class="col-md-7 text-right">
            <ul class="list-inline">
                <li><label>Gender:</label> <strong>${patient.gender}</strong></li>
                <li><label>DOB:</label>  <strong>${patient.birthDate}</strong></li>
                <li><label>NHS No.:</label> <strong>${patient.nhsNumberIdentifier.value}</strong></li>
            </ul>
            </div>
        </div>
        </div>
        <div class="panel-body">
        <table class="table">
            <tbody>
            <tr>
                <td width="40%"><label>Address:</label> <strong>${patient.address[0].city}. ${patient.address[0].district}. ${patient.address[0].postalCode}</strong></td>
                <td width="20%"><label>Phone:</label> <strong>${patient.telecom ? patient.telecom.find(com => com.system === 'phone') ? patient.telecom.find(com => com.system === 'phone').value : '' : ''}</strong></td>
                <td width="20%"><label>GP Details:</label> <strong>${patient.generalPractitioner[0].display}. ${patient.managingOrganization.display}</strong></td>
                <td width="20%"><label>PAS No.:</label> <strong>${patient.otherIdentifier[0] ? patient.otherIdentifier[0].value : ''}</strong></td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>
        <div>html template adapted from <a href='https://github.com/nhsconnect/gpconnect-demonstrator'>GP Connect Demonstrator</a></div>.
        </body>
        </html>`)
        response.end()
      })
      .catch(function (err) {
        response.writeHead(400, { 'Content-Type': 'text/html' })
        response.write(err)
        response.end()
      })
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(`No NHS Number Provided`)
    response.end()
  }
})

app.listen(3000)
console.log('App to demonstrate using the library in a client.')
console.log('Demonstrates parsing a CareConnect FHIR resource from a server.')
console.log('App running at http://localhost:3000/')
console.log('Try visiting: http://localhost:3000?nnn=9876543210')
