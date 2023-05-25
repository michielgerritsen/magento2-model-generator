/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    setValidData(): Chainable<any>;
    enableDataModels(): Chainable<any>;
    disableDataModels(): Chainable<any>;
    enableAdminGrid(): Chainable<any>;
    disableAdminGrid(): Chainable<any>;
    openFileByPath(filename: string): Chainable<any>;
  }
}
