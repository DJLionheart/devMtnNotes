it('Social Mountain demo', () => {
    cy.visit('https://www.amazon.com')
    cy.get('select[class="nav-search-dropdown searchSelect"]')
        .select('Books')




    // cy.visit('https://devmountain.github.io/react-3-afternoon/')
    // cy.get('input[class="Compose__input"')
    //     .type('今日から私達は先輩になったんだ！一緒にグループプロジェクトを頑張ろう！Kyou kara, watashitachi wa senpai ni nattan da! Issho ni guruupu purojekuto o ganbarou! ')
    // cy.get('button')
    //     .contains('Compose')
    //     .click()
})