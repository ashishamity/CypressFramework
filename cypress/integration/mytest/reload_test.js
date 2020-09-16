describe('Page refresh or sceanrio', ()=>{
    it('Scenario 1', ()=>{
     cy.visit('https://www.freshworks.com') 
     cy.reload().contains('Platform').should('be.visible')
    })
})