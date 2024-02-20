describe('Dashboard Page', () => {
  const email = Cypress.env('email')
  const password = Cypress.env('password')
  const username = Cypress.env('username')

  console.log(email,'-',password,'-',username)

  beforeEach(function () {
    cy.login({ email, password })
  })

  it('can see open dashboard page', function() {
    cy.get('h2').should('contain', `Moi, ${username}`)
  })

  it('can see all links', function() {
    cy.get('.BurgerDb__LaptopBurger-sc-qnbqr0-0').trigger('mouseover')
    cy.dataCy('currentslink').should('be.visible')
    cy.dataCy('albumslink').should('be.visible')
    cy.dataCy('pictureslink').should('be.visible')
    cy.dataCy('cvlink').should('be.visible')
    cy.dataCy('createcurrent').should('be.visible')
    cy.dataCy('createalbum').should('be.visible')
    cy.dataCy('createpicture').should('be.visible')
    cy.dataCy('createcvpart').should('be.visible')
  })

  // describe('can open all pages', () => {
  //   // beforeEach(function () {
  //   //   cy.get('.BurgerDb__LaptopBurger-sc-qnbqr0-0').click()
  //   // })

  //   it('currentpage can open', function() {
  //     cy.visit('/dashboard/currents')
  //     cy.dataCy('currentlist').should('be.visible')
  //   })
  // })
})

export {}