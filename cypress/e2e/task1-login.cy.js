describe('Login', () => {

    it ('Should sign up and perform a login successfully when using correct information', ()=> {
        const uniqueSeed = Date.now().toString();
        const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);
        var newUser = `AutUser${getUniqueId()}`;
        var pass = 'Pass123'

        cy.signup(newUser, pass)
        cy.login(newUser, pass)
        cy.get('#nameofuser')
            .should('have.text', `Welcome ${newUser}`)
        cy.get('#logout2').click()
        cy.get('#login2').should('be.visible')
    })

    it ('Should not login when using invalid credentials', ()=> {
        cy.login('not-existent', null)
    })

})