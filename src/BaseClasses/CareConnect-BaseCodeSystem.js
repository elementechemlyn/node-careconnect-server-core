const FHIRServer = require('..')
const CodeSystem = require(FHIRServer.resources.STU3.CodeSystem)
const Parameters = require(FHIRServer.resources.STU3.Parameters)
const OperationOutCome = require(FHIRServer.resources.STU3.OperationOutcome)

class CareConnectBaseCodeSystem extends CodeSystem {

  getConcept (code) {
    return this.concept.find(cpt => cpt.code === code)
  }

  lookup (code) {
    let concept = this.concept.find(cpt => cpt.code === code)
    if (concept) {
      let results = []
      results.push({ 'name': 'name', 'valueString': this.name ? this.name : this.id })
      results.push({ 'name': 'version', 'valueString': this.version })
      results.push({ 'name': 'display', 'valueString': concept.display })
      return new Parameters({ 'parameter': results })
    } else {
      let issue = {
        'issue': {
          'severity': 'error',
          'code': 'not-found',
          'details': {
            'text': `Code ${code} not found`
          }
        }
      }
      return new OperationOutCome(issue)
    }
  }

  validateCode (code, display) {
    let concept = this.concept.find(cpt => cpt.code === code)
    let results = []
    if (concept) {
      if (concept.display && display) {
        if (display === concept.display) {
          results.push({ 'name': 'result', 'valueBoolean': true })
          results.push({ 'name': 'display', 'valueString': concept.display })
        } else {
          results.push({ 'name': 'result', 'valueBoolean': false })
          results.push({ 'name': 'message', 'valueString': 'The display is incorrect' })
          results.push({ 'name': 'display', 'valueString': concept.display })
        }
      } else {
        results.push({ 'name': 'result', 'valueBoolean': true })
        results.push({ 'name': 'display', 'valueString': concept.display })
      }
    } else {
      results.push({ 'name': 'result', 'valueBoolean': false })
      results.push({ 'name': 'message', 'valueString': 'Code Not found' })
    }
    return new Parameters({ 'parameter': results })
  }
}

module.exports = CareConnectBaseCodeSystem
