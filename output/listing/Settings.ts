import StateAware from '~/output/StateAware'
import type GeneratesXmlInterface from '~/interfaces/GeneratesXmlInterface'

export default class Settings extends StateAware implements GeneratesXmlInterface {
  getXml(xml: XMLDocument): HTMLElement {
    const settings = xml.createElement('settings')
    const deps = xml.createElement('deps')
    const dep = xml.createElement('dep')
    dep.innerHTML = this.dataSource()
    deps.appendChild(dep)
    settings.appendChild(deps)

    const spinner = xml.createElement('spinner')
    spinner.innerHTML = `${this.baseName()}_columns`
    settings.appendChild(spinner)

    return settings
  }
}
