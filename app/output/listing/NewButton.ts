import StateAware from '~/output/StateAware'
import { createItem } from '~/functions/xml'
import type GeneratesXmlInterface from '~/interfaces/GeneratesXmlInterface'

export default class NewButton extends StateAware implements GeneratesXmlInterface {
  getXml(xml: XMLDocument): HTMLElement {
    const buttons = createItem(xml, 'buttons', 'array')
    const add = createItem(xml, 'add', 'array')
    buttons.appendChild(add)

    add.appendChild(createItem(xml, 'name', 'string', 'new'))
    add.appendChild(
      createItem(xml, 'label', 'string', `Add New ${this.modelName()} Item`, [
        { name: 'translate', value: 'true' },
      ])
    )
    add.appendChild(createItem(xml, 'url', 'string', this.baseRoute() + 'new'))
    const classNode = createItem(xml, 'class', 'string');
    classNode.innerHTML = 'primary';
    add.appendChild(classNode)

    return buttons
  }
}
