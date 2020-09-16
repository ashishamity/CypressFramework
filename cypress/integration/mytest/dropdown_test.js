describe('Dropdown practice', ()=>{
    it.skip('TC1 - Select', ()=>{
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country').select('Algeria')
        .should('have.value', 'Algeria')
    })

    it('TC2 - Dropdown without Select tag',()=>{
        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('Cypress')
        cy.get('.erkvQe').find('li span').should('have.length','10').contains('cypress vine').click()
    } )
})