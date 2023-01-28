/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    setValidData(): Chainable<any>;
    enableDataModels(): Chainable<any>;
    disableDataModels(): Chainable<any>;
  }
}
