it('cypress demo', () => {
    // You have access to a cy global variable in Cypress
    cy.visit('https://example.cypress.io')
    // This is telling the test in our mock browser to visit the site
    cy.get('a[href="/commands/actions"]')
    // this will select all a tags with the specified url
    // You can chain on other commands like contains:
        .contains('type')

        // assertion: cypress has access to commands from chai, mocha and other assertion libraries
        .should('contain', 'type') // Running an assertion to verify it contains type
        .click() // will click on that DOM element.
    cy.get('#couponCode1')
        .type('GreatCouponCode')
        .should('have.value', 'GreatCouponCode')
    cy.get('button')
        .contains('Submit')
        // Gets a button that contains the text 'Submit'
        .click();

        // To visit own site: http://localhost:3000 and do the same thing as what we did in this demo

})