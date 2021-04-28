import AttributeInterface from '~/interfaces/AttributeInterface'

export function createItem(
  xml: XMLDocument,
  name: string,
  type: string,
  content?: string,
  options?: Array<AttributeInterface>
): HTMLElement {
  const item = xml.createElement('item')
  item.setAttribute('name', name)
  item.setAttribute('xsi:type', type)

  if (content) {
    item.innerHTML = content
  }

  if (options) {
    options.forEach((option) => {
      item.setAttribute(option.name, option.value)
    })
  }

  return item
}
