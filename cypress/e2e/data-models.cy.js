describe('Test that we get the right output when using the data models options', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should give an option to use data models or not', () => {
    cy.get('[aria-labelledby=module-details]').contains('Use data models')
  })

  it('selecting the option should persist between refreshes', () => {
    cy.get(
      '[aria-labelledby=module-details] [name="includeDataModels"]'
    ).check()

    cy.reload()

    cy.get(
      '[aria-labelledby=module-details] [name="includeDataModels"]'
    ).should('be.checked')
  })

  it('should not include the data model', () => {
    cy.setValidData()
    cy.disableDataModels()

    cy.get('.is-dir-model .is-dir-data .is-file-blog-php').should('not.exist')
  })

  it('generates a class with the right contets when data models are disabled', () => {
    cy.setValidData()
    cy.disableDataModels()

    cy.get('.is-file-blog-php a').click()
    cy.get('[aria-labelledby="modal-title"]').contains(
      'extends AbstractExtensibleObject'
    )
  })

  it.only('generates a class with the right contents when data models are enabled', () => {
    cy.setValidData()
    cy.enableDataModels()

    cy.get('.is-file-blog-php:first a').click()
    cy.get('[aria-labelledby="modal-title"]').contains(
      'public function getDataModel()'
    )
  })
})
