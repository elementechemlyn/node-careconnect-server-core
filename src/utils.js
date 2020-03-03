const FHIRServer = require('..')
const path = require('path')
let Coding = require(FHIRServer.resources.STU3.Coding)

let cleanAssign = (target, source) => {
  target.__extension = undefined
  Object.assign(target, source)
}

let completeCoding = (codeSystem, codeValue) => {
  let valueCoding = new Coding()
  let concept = null
  // If we don't have a display - look it up from the code_system
  if (!codeValue.display) {
    // did we just get a code or an object with a code value?
    let code = codeValue.code ? codeValue.code : codeValue
    concept = codeSystem.concept.find(cpt => cpt.code === code)
  } else {
    // Use as is.
    concept = codeValue
  }
  valueCoding.system = codeSystem.url
  valueCoding.code = concept.code
  valueCoding.display = concept.display
  return valueCoding
}

let monkeyPatchConfig = (config) => {
  let profileKeys = Object.keys(config.profiles)
  profileKeys.forEach(function (profile) {
    if (!profile.metadata) {
      config.profiles[profile].metadata = path.resolve(__dirname, `Metadata/${profile}.js`)
    }
    if (!profile.versions) {
      config.profiles[profile].versions = ['3_0_1']
    }
  })
}

module.exports = {
  completeCoding,
  cleanAssign,
  monkeyPatchConfig
}
