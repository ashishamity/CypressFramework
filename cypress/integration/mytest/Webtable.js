describe('Webtable Scenario', () => {
    it('TC1',() =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($e1,index,$list) => {
            const course = $e1.text()
            if(course.includes('Python')){
                //Way 1
                  cy.get('tr td:nth-child(2)').eq(index).next().contains('25')
                //Way 2
                 cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const text = price.text()
                    expect(text).to.equal('25')
                  })
            }
        })
    })
})