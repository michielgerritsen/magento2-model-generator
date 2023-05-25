// @ts-check
/// <reference path="../index.d.ts" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('setValidData', () => {
  cy.get('[name="vendor"]').type('Acme')
  cy.get('[name="module"]').type('FooBar')
  cy.get('[name="modelName"]').type('Blog')
})

Cypress.Commands.add('enableDataModels', () => {
  cy.get('[aria-labelledby=module-details] [name="includeDataModels"]').check()
})

Cypress.Commands.add('disableDataModels', () => {
  cy.get(
    '[aria-labelledby=module-details] [name="includeDataModels"]'
  ).uncheck()
})

Cypress.Commands.add('enableAdminGrid', () => {
  cy.get('[aria-labelledby=module-details] [name="enabled"]').check()
})

Cypress.Commands.add('disableAdminGrid', () => {
  cy.get('[aria-labelledby=module-details] [name="enabled"]').uncheck()
})

Cypress.Commands.add('openFileByPath', (fileName: string) => {
  let selector = ''
  const parts = fileName.split('/')
  parts.forEach((part) => {
    const filename = part.replace('.', '-')

    selector +=
      ' ' +
      (part.includes('.') ? `> .is-file-${filename} a` : `.is-dir-${part} > ul`)
  })

  selector = selector.toLowerCase();

  cy.log('Path', fileName)
  cy.log('Selector', selector)

  cy.get(selector).should('be.visible').click()
  cy.get('#modal-title').should('contain', fileName).should('be.visible')
})
