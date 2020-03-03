const FHIRServer = require('../..')

let Condition = require(FHIRServer.resources.STU3.Condition)
let Meta = require(FHIRServer.resources.STU3.Meta)
let ExtensionCareConnectConditionEpisode1 = require('../../src/Extensions/ExtensionCareConnectConditionEpisode1.js')

class CareConnectCondition1 extends Condition {
  constructor (opt) {
    super(opt)
    if (opt) {
      delete opt.resourceType // resourceType is read only on super
      this.manufacture = false // Don't ake empty objects if we don't ahve them
    } else {
      this.manufacture = true // We're an empty "factory" object
    }
    Object.assign(this, opt)
    this.meta = new Meta()
    this.meta.profile = 'https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Condition-1'
  }

  addExtension (extension) {
    if (this.extension) {
      this.__data.extension.unshift(extension)
    } else {
      this.__data.extension = [extension]
    }
  }

  addReplaceExtension (extension) {
    if (this.extension) {
      const index = this.extension.findIndex(ext => ext.url === extension.url)
      if (index === -1) {
        this.__data.extension.unshift(extension)
      } else {
        this.__data.extension[index] = extension
      }
    } else {
      this.__data.extension = [extension]
    }
  }

  set episodisity (value) {
    if (value.url !== 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ConditionEpisode-1') {
      throw new Error('Incorrect profile URL for episodisity')
    }
    if (!(value instanceof ExtensionCareConnectConditionEpisode1)) {
      value = new ExtensionCareConnectConditionEpisode1(value.toJSON())
    }
    this.addExtension(value)
  }

  get episodisity () {
    let ext = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ConditionEpisode-1')
    if (ext && ext.length > 0) {
      // if these got built from a generic object - take the chance to set it up 'correctly'
      ext.forEach(function (element) {
        if (!(element instanceof ExtensionCareConnectConditionEpisode1)) {
          var index = this.__data.extension.indexOf(element)
          this.__data.extension[index] = new ExtensionCareConnectConditionEpisode1(element.toJSON())
        }
      }, this)
    }
    let retObject = this.extension && this.extension.filter(ext => ext.url === 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-ConditionEpisode-1')
    if ((!retObject || retObject.length === 0) && this.manufacture) {
      retObject = new ExtensionCareConnectConditionEpisode1()
      this.episodisity = retObject
      return [retObject]
    }
    return retObject
  }

}

module.exports = CareConnectCondition1
