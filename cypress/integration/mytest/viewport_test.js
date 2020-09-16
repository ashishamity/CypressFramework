describe('testing diff view ports', ()=>{
    before(()=>{
        console.log('running my tests')
    })

    beforeEach(()=>{
        cy.visit('https://www.google.com')
    })

    it('open in macbook -13', ()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in macbook-15', ()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone-x', ()=>{
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
        
    })

})