describe('Album Page', function() {

  beforeEach(function() {
    // cy.intercept(`${Cypress.env('apiUrl')}/albums`).as('getAlbums')
    cy.intercept(`${Cypress.env('apiUrl')}/albums`,
      { fixture: 'albums.json' }).as('getFixAlbums')
    cy.visit('/galleria')
    cy.wait('@getFixAlbums')
  })

  it('get all albums', function() {
    cy.get('[data-cy=albumListItem]').its('length').should('eq', 3)
  })


  it('can open first album', function() {
    cy.get('[data-cy="albumListItemLink"]').first().click()
    cy.get('[data-cy=albumDetails]').its('length').should('eq', 1)
  })
})

export {}

// .its('response.statusCode').should('eq', 500)
// cy.wait('@getAlbums').then(({ request }) => {
//     expect(request.body.firstName).to.eq('Jane')
//   })
// cy.intercept('GET', 'https://marjakolu.fi/laravel-api/api/albums',
//       { fixture: 'albums.json' }).as('getAlbums')

// cy.intercept('GET', `${Cypress.env('apiUrl')}/albums`).as('getAlbums')

// cy.intercept('GET', `${Cypress.env('apiUrl')}/albums`,
//       { fixture: 'albums.json' }).as('getAlbums')