const FHIRServer = require('..')
const ValueSet = require(FHIRServer.resources.STU3.ValueSet)
const Parameters = require(FHIRServer.resources.STU3.Parameters)

class CareConnectBaseValueSet extends ValueSet {
  getCodeSystem (systemUrl) {
    if (systemUrl === undefined) {
      if (this.code_systems.length > 1) {
        throw new Error('Can\'t default code system') // TODO better error
      } else if (this.code_systems.length === 0) {
        throw new Error('Can\'t default code system') // TODO better error
      } else {
        return this.code_systems[0]
      }
    } else {
      return this.code_systems.find(cs => cs.url === systemUrl)
    }
  }

  hasCodeSystems () {
    return this.code_systems.length > 0
  }

  hasCodeSystem (systemUrl) {
    if (this.needs_snomed) {
      return (systemUrl === 'http://snomed.info/sct')
    } else {
      return (this.code_systems.find(cs => cs.url === systemUrl) !== undefined)
    }
  }

  validateCode (system, code, display) {
    let results = []
    if (this.needs_snomed) { // TODO We don't currently validate a snomed code
      return undefined // undefined === we don't know if this is valid or not. TODO better error.
    }
    // Check we have an include section?
    if (this.compose && this.compose.include) {
      // Do we know about this system?
      const systemInclude = this.compose.include.find(cs => cs.system === system)
      if (systemInclude) {
        // Do we have concepts to validate against?
        if (systemInclude.concept) {
          let concept = systemInclude.concept.find(cpt => cpt.code === code)
          if (concept) {
            if (display) {
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
        } else {
          // validate directly against the codesystem
          const codeSystem = this.code_systems.find(cs => cs.url === system)
          if (codeSystem) {
            return codeSystem.validateCode(code, display)
          } else {
            // This is an error? How did we not get a codesystem object?
            throw JSON.parse({ 'error': 'Error!!!' }) // TODO. Proper error here
          }
        }
      } else {
        // Return system not known
        results.push({ 'name': 'result', 'valueBoolean': false })
        results.push({ 'name': 'message', 'valueString': 'System not part of valueset' })
        return new Parameters({ 'parameter': results })
      }
    }
  }
}

module.exports = CareConnectBaseValueSet
