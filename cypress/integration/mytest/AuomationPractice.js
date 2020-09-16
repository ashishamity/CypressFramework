describe('Cypress Automation Test Case Scenarios', ()=>{

    beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    //Checkbox
    it('CheckBox Test Case Scenario', function(){
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option2'])
    })

    //Static Dropdown

    it('Static DropDown',()=>{
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
    })
 
    //Iteration
    it('Dynamic DropDown',()=>{
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) =>{
            if($el.text()==="India"){
                $el.click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it('Visible and Invisible element', ()=>{
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    })
    //radio buttons
    it('Radio buttons', ()=>{
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})