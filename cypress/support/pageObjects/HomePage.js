
export const homePage ={
    getEditBox(){
        return cy.get('input[name= "name"]:nth-child(2)')
    },
    
    getGender(){
        return cy.get('select')
    },
    getTwoWayBinding(){
        return cy.get('input[name= "name"]:nth-child(2)')
    },
    
    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    },
    
    getShopTab(){
        return cy.get('li.nav-item:nth-child(2) >a')
    }
}