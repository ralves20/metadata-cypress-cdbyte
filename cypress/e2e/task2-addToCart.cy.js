describe('Login', () => {

    it ('Should successfully add an item into the cart and remove one item', ()=> {
        const uniqueSeed = Date.now().toString();
        const getUniqueId = () => Cypress._.uniqueId(uniqueSeed);
        var newUser = `AutUser${getUniqueId()}`;
        var pass = 'Pass123'
        var userName = 'Automation'
        var country = 'US'
        var city = 'New York'
        var creditCard = '00000'
        var month = 'September'
        var year = '2023'


        cy.signup(newUser, pass)
        cy.login(newUser, pass)
        cy.get('#nameofuser')
            .should('have.text', `Welcome ${newUser}`)
        cy.get("h4[class='card-title']").contains('Samsung galaxy s6').click()
        cy.get("a[onclick='addToCart(1)']").click()
        cy.visit("https://www.demoblaze.com/cart.html")
        cy.get("#tbodyid  a").contains('Delete').click()

        cy.wait(2000)
        cy.get("button[data-target='#orderModal']").click()
        cy.get("#name").type(userName)
        cy.get('#country').type(country)
        cy.get('#city').type(city)
        cy.get('#card').type(creditCard)
        cy.get('#month').type(month)
        cy.get('#year').type(year)
        cy.get("button[onclick='purchaseOrder()']").click()
    })

})