describe('Alert Sceanrio' , ()=>{
    it('First TC',() =>{
        cy.visit("http://qaclickacademy.com/practice.php")
        cy.get('#alertbtn').click()
        cy.get('[value ="Confirm"]').click()
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('Second TC',() => {
        cy.visit('http://qaclickacademy.com/practice.php')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include', 'rahul')
        cy.go('back')
    })
    
})