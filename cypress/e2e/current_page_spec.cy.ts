describe('Current Page', function() {

  beforeEach(function() {
    // cy.intercept(`${Cypress.env('apiUrl')}/currents`).as('getAlbums')
    cy.intercept(`${Cypress.env('apiUrl')}/currents`,
      { fixture: 'currents.json' }).as('getFixs')
    cy.visit('/currents')
    cy.wait('@getFixs')
  })

  it('get all currents', function() {
    cy.get('[data-cy=currentListItem]').its('length').should('eq', 2)
  })


  // it('can open first album', function() {
  //   cy.get('[data-cy="currentListItemLink"]').first().click()
  //   cy.get('[data-cy=albumDetails]').its('length').should('eq', 1)
  // })
})

export {}

// .its('response.statusCode').should('eq', 500)
// cy.wait('@getAlbums').then(({ request }) => {
//     expect(request.body.firstName).to.eq('Jane')
//   })
// cy.intercept('GET', 'https://marjakolu.fi/laravel-api/api/currents',
//       { fixture: 'currents.json' }).as('getAlbums')

// cy.intercept('GET', `${Cypress.env('apiUrl')}/currents`).as('getAlbums')

// cy.intercept('GET', `${Cypress.env('apiUrl')}/currents`,
//       { fixture: 'currents.json' }).as('getAlbums')
