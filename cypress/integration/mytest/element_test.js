describe('launch my app', ()=>{

    it('app testing', ()=>{
        cy.visit('https://www.freshworks.com')
        cy.contains('Platform')
        cy.contains('Platform').click();
        cy.url().should('include','/platform')
    })
})