describe('The Home Page', () => {
  it('front page can be opened', () => {
    cy.visit('/')
    cy.contains('Marja Kolu')
    cy.log('BACKEND-API' + Cypress.env('apiTestUrl'))
  })
})

export {}