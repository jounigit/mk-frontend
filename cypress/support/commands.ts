/* eslint-disable max-len */
/// <reference types="cypress" />

import { ILogin } from '@/types'

const apiUrl = Cypress.env('apiUrl')

Cypress.Commands.add('login', ({ email, password }: ILogin) => {
  cy.request({
    method: 'POST',
    url: apiUrl+'/login',
    form: true,
    body: {
      email,
      password
    }
  })
    .then((response) => {
      window.localStorage.setItem('token', JSON.stringify(response.body.token))
    })
})

Cypress.Commands.add('setToken', ({ email, password }: ILogin) => {
  const url = apiUrl+'/login'
  cy.request('POST', url, { email, password })
    .then((response) => {
      localStorage.setItem('token', JSON.stringify(response.body.token))
      return `Bearer ${response.body.token}`
    })
})

Cypress.Commands.add('dataCy', (selector) => {
  return cy.get(`[data-cy=${selector}]`)
})

Cypress.Commands.add('makeRequest', (path, method, data) => {
  const options = {
    method: method,
    url: path,
    body: data,
  }

  cy.request(options)
    .then((res) => {
      console.log(res.body)
      return 'OK'
    })
})

declare global {
  namespace Cypress {
    interface Chainable {
    //   login(email: string, password: string): Chainable<void>
      login({ email, password }: ILogin): Chainable<string>
      setToken({ email, password }: ILogin): Chainable<string>
      makeRequest(path: string, method: string, data: object): Chainable<string>
      dataCy(selector: string ): Chainable<JQuery<HTMLElement>>
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add(
// 'drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add(
// 'dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

// Cypress.Commands.add('login', ({ email, password }: ILogin) => {
//   cy.visit('/login')

//   cy.get('input[name=email]').type(email)

//   // {enter} causes the form to submit
//   cy.get('input[name=password]').type(`${password}{enter}`, { log: false })

//   // we should be redirected to /dashboard
//   cy.url().should('include', '/dashboard')

//   // cy.get('h1').should('contain', username)
// })


// Cypress.Commands.add('login', ({ email, password }: ILogin) => {
//   const url = apiUrl+'/login'
//   cy.request('POST', url, { email, password })
//     .then((response) => {
//       console.log('CYPRESS COMMANDTOKEN : ', response.body.token)
//       Cypress.env('token', `Bearer ${response.body.token}`)
//     })
//     .its('status')
//     .should('eq', 200)
// })