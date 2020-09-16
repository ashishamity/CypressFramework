describe('launch my app',() =>{

    it('testing the scenario', ()=>{

    cy.visit('https://www.freshworks.com')
    cy.contains('Platform').click()
    cy.url().should('include', '/platform');
    cy.get('.align-center.mb-lg h1:nth-of-type(2)')
    .should('be.visible')
    .and('contain', 'platform')
    .and('have.length', '1')
    cy.get('ul.footer-nav li')
    .should('have.length',35)
    cy.get('ul.footer-nav li').find("a[href*='footer']")
    .should('have.length',13)

    })

    
})