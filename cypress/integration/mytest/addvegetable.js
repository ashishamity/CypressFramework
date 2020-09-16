describe('Test ecommerce application', ()=>{

    it('Verify count of products', ()=>{
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.get('.product').should('have.length', 5)
     //how to get only visible elments
     cy.get('.product:visible').should('have.length',4)
     //Parent-child chainning.
     cy.get('.products').find('.product').should('have.length',4)
    })

    it('Add products to cart products', ()=>{
        //Adding elemnst based on click
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        //Adding elements using iteration

        cy.get('productLocator').find('.product').each(($el, index, $list) => {
            const veg =$el.find('h4.product-name').text()
            //javascript function
            if(veg.includes('Cashews')){
                $el.find('button').click();
            }
        })
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement);
        })
    })
})