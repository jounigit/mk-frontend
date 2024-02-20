describe('Admin Album Page', function() {
  const email = Cypress.env('email')
  const password = Cypress.env('password')
  const title = 'Cypress otsikko'
  // const token = JSON.parse(localStorage.getItem('token') || '{}')

  // beforeEach(function() {
  //   cy.getToken({ email, password })
  //   cy.visit( '/dashboard')
  //   cy.log(token)
  //   cy.url().should('include', '/dashboard')
  //   cy.visit( '/dashboard/albums')
  // })

  it('can open form', function() {
    cy.setToken({ email, password })
    cy.visit('/dashboard/albums/create')
    // cy.dataCy('createalbum').first().should('be.hidden')
    // cy.get('@createButton').should('contain', 'Uusi albumi')
    // cy.get('h2').should('contain', 'Current List')
  })

  context('create album', function() {
    before(function() {
      cy.setToken({ email, password })
      cy.visit('/dashboard/albums/create')
      cy.get('input[name="title"]').as('inTitle')
    })

    it('can see form input', function() {
      cy.get('input[name=title]').type(title)
      cy.get('form').submit()
    })
  })

})

export {}