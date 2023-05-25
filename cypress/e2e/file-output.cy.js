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
})
