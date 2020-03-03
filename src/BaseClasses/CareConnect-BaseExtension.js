const FHIRServer = require('..')
const Extension = require(FHIRServer.resources.STU3.Extension)

class CareConnectBaseExtension extends Extension {
  hasValueSet () {
    return this.valueSet !== undefined
  }

  needsSnomed () {
    if (this.hasValueSet()) {
      return this.valueSet.needs_snomed
    } else {
      return false
    }
  }
}

module.exports = CareConnectBaseExtension
