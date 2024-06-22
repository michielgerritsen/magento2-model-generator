/* eslint-disable */

describe('Check that the generated output files are correct', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.setValidData()
  })

  it('Has a SearchResultsInterface implementation', () => {
    cy.openFileByPath('Model/BlogSearchResults.php')

    cy.get('.code-contents').contains('implements BlogSearchResultsInterface')
    cy.get('.code-contents').contains('extends SearchResults')
  })

  it('Does not include fulltext when no text fields are added', () => {
    cy.enableAdminGrid()
    cy.enableSearch()

    cy.addField('title', 'Integer')

    cy.openFileByPath('etc/db_schema.xml')

    cy.get('.code-contents').should('not.contain', 'indexType="fulltext"')
  })

  it('Does include fulltext when a text field is added', () => {
    cy.enableAdminGrid()
    cy.enableSearch()

    cy.addField('title', 'Text')

    cy.openFileByPath('etc/db_schema.xml')

    cy.get('.code-contents').should('contain', 'indexType="fulltext"')
  })
})
