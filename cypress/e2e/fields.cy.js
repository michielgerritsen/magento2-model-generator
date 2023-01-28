describe('Test the input fields', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show instructions when no input is given', () => {
    cy.get('[aria-labelledby=top-sidebar]').contains(
      'Before you can download your module make sure you enter your'
    )
  })

  it('should show the generated files when entered the correct data', () => {
    cy.setValidData()

    cy.get('[aria-labelledby=top-sidebar]').contains(
      'BlogRepositoryInterface.php'
    )
  })

  it('Should include the registration.php and module.xml when selected', () => {
    cy.setValidData()

    cy.get('[name="includeModuleRegistration"]').check()

    cy.get('[aria-labelledby=top-sidebar]').contains(
      'registration.php'
    )

    cy.get('[aria-labelledby=top-sidebar]').contains(
      'module.xml'
    )
  })
})
