describe('Admin Current Page', function() {
  const email = Cypress.env('email')
  const password = Cypress.env('password')

  beforeEach(function() {
    cy.setToken({ email, password }).then(($token) => {
      Cypress.env('token', $token)
    })
  })

  it('get all currents', function() {
    cy.log(Cypress.env('token'))
    // const authorization = `bearer ${ token }`
    cy.visit( '/dashboard/currents' )
    cy.get('h2').should('contain', 'Current List')
  })

})

export {}