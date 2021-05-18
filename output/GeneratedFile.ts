import Mustache from 'mustache'
import StateAware from '~/output/StateAware'
import GeneratesFileInterface from '~/interfaces/GeneratesFileInterface'

export default class GeneratedFile extends StateAware implements GeneratesFileInterface {
  private path: String

  constructor(state: any, path: String) {
    super(state)

    this.path = path
  }

  getPath(): String {
    return this.path
      .replace(
        'ModelName',
        this.capitalizeFirstLetter(this.snakeToCamel(this.modelName()))
      )
      .replace('BaseName', this.baseName())
      .replace('.stub', '')
  }

  getContents(): String {
    const contents = require('~/assets/stubs/' + this.path).default

    return Mustache.render(contents, this.fileContext())
  }

  snakeToCamel(input: String) {
    return input.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    )
  }

  capitalizeFirstLetter(input: String) {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
}
