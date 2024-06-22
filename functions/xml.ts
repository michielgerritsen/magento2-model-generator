import type AttributeInterface from '~/interfaces/AttributeInterface'

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

const stringTimesN = (n: number, char: string) => Array(n + 1).join(char)

// Adapted from https://gist.github.com/sente/1083506
export function prettifyXml(xmlInput: string): string {
  const EOL = '\n'
  const indentString = stringTimesN(2, ' ')

  let formatted = ''
  const regex = /(>)(<)(\/*)/g
  const xml = xmlInput.replace(regex, `$1${EOL}$2$3`)
  let pad = 0
  xml.split(/\r?\n/).forEach((l) => {
    const line = l.trim()

    let indent = 0
    if (line.match(/.+<\/\w[^>]*>$/)) {
      indent = 0
    } else if (line.match(/^<\/\w/)) {
      // Somehow istanbul doesn't see the else case as covered, although it is. Skip it.
      /* istanbul ignore else  */
      if (pad !== 0) {
        pad -= 1
      }
    } else if (line.match(/^<\w([^>]*[^/])?>.*$/)) {
      indent = 1
    } else {
      indent = 0
    }

    const padding = stringTimesN(pad, indentString)
    formatted += padding + line + EOL
    pad += indent
  })

  return formatted.trim()
}
