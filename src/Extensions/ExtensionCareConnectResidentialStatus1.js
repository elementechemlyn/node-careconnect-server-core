// This code was autogenerated from BuildExtensions.py

const FHIRServer = require('../..')
const CareConnectBaseExtension = require('../BaseClasses/CareConnect-BaseExtension')
let CodeableConcept = require(FHIRServer.resources.STU3.CodeableConcept)
const ValueSet = require('../../src/ValueSets/CareConnectResidentialStatus1.js')
let Coding = require(FHIRServer.resources.STU3.Coding)

class ExtensionCareConnectResidentialStatus1 extends CareConnectBaseExtension {
  constructor (opt) {
    super(opt)
    opt && delete opt.resourceType
    Object.assign(this, opt)
    this.valueSet = ValueSet
    this.url = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ResidentialStatus-1'
  }
  get codeableConcept () {
    if (this.valueSet){
      return this.valueCodeableConcept && this.valueCodeableConcept.coding &&
        this.valueCodeableConcept.coding.find(cde => this.valueSet.hasCodeSystem(cde.system))
    } else {
      return this.valueCodeableConcept.coding[0]
    }
  }

  set codeableConcept (value) {
    let valueValue = new CodeableConcept()
    let valueValueCoding = new Coding()
    let concept
    let codeSystem = this.valueSet ? this.valueSet.getCodeSystem(value.system) : undefined

    // If we don't have a display - look it up.
    if ((codeSystem) && (!value.display)) {
      // did we just get a code or an object with a code value?
      let code = value.code ? value.code : value
      concept = codeSystem.getConcept(code)
    } else {
      // Use as is.
      concept = value
    }
    if (codeSystem) {
      valueValueCoding.system = codeSystem.url
    } else {
      valueValueCoding.system = value.system
    }
    valueValueCoding.code = concept.code
    valueValueCoding.display = concept.display

    valueValue.coding = valueValueCoding
    this.valueCodeableConcept = valueValue
  }
}

module.exports = ExtensionCareConnectResidentialStatus1
