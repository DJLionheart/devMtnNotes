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

})