export const shopPage = {

    getProduct(){
        return cy.get('.card-title')
    },

    getCheckoutTab(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    },

    getAddButton(){
       return  cy.get('.btn.btn-info')
    }
}