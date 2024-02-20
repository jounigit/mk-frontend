describe('Login Page', () => {
  const email = Cypress.env('email')
  const password = Cypress.env('password')
  const username = Cypress.env('username')

  console.log(email,'-',password,'-',username)

  it('login form can be opened', function() {
    cy.visit('/')
    cy.dataCy('loginLink').click()
    cy.get('h3').should('contain', 'LOGIN')
  })

  describe('can login', () => {
    it('user can login', function() {
      cy.visit('/login')
      cy.get('input[name=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()
      cy.get('.success').should('have.text', 'Login successfully.')
      cy.get('[data-cy=burger]').click()
    })
  })

  // describe('', function() {
  //   beforeEach(function() {
  //     cy.visit('/login')
  //   })

  //   it('incorrect email or password', function() {
  //     cy.get('input[name=email]').type(email)
  //     cy.get('input[name=password]').type('eikay')
  //     cy.get('form').submit()
  //     cy.get('[data-cy=error-message]')
  //       .should('be.visible')
  //       .should('contain', 'incorrect email or password!')
  //   })
  // })

})

export {}