// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signup', (user, pass) => {
    cy.visit('/')

    cy.get('#signin2').click()

    cy.wait(2000)
    cy.get('[id=sign-username]').as('username')
    cy.wait(2000)
    cy.get('[id=sign-password]').as('password')

    user 
        ? cy.get('@username').clear().type(user)
        : cy.log('username is null')

    pass
        ? cy.get('@password').clear().type(pass)
        : cy.log('password is null')

    cy.get("button[onclick='register()']").click()
})

Cypress.Commands.add('login', (user, pass) => {
    cy.visit('/')

    cy.get('#login2').click()

    cy.wait(2000)
    cy.get('[id=loginusername]').as('username')
    cy.wait(2000)
    cy.get('[id=loginpassword]').as('password')

    user 
        ? cy.get('@username').clear().type(user)
        : cy.log('username is null')

    pass
        ? cy.get('@password').clear().type(pass)
        : cy.log('password is null')

    cy.get("button[onclick='logIn()']").click()
})