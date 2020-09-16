describe('Amazon Search App', ()=>{

    it('search test', ()=>{
        cy.visit("https://www.amazon.in")
        cy.get('div.nav-search-field').within(()=>{
            cy.get('#twotabsearchtextbox').type('Samsung M31').click()
        })
    })
})