/// <reference types ="Cypress" />

import {homePage} from "../../support/pageObjects/HomePage"
import {shopPage}  from "../../support/pageObjects/ShopPage"
import {chkoutPage} from "../../support/pageObjects/CheckoutPage"

describe('Angular Framework', ()=>{
    before(function() {
        cy.fixture('e2e').then(function(data){
            this.data = data;
        })
    })

    it('End To End Testing', function() {
        //const homePage = new HomePage()
        cy.visit(this.data.url)
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayBinding().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()
        this.data.products.forEach(element => {
            cy.selectProducts(element)
        });
        
        shopPage.getCheckoutTab().click()
        var sum =0
        chkoutPage.getPriceofItem().each((item)=>{
            var res = item.text().split(" ")
            cy.log(res[1])
            sum = Number(sum) + Number(res[1])
            }).then(()=>{
             chkoutPage.getTotalPriceOfItem().then((amount)=>{
                 var totalValue = amount.text().split(" ")
                 expect(totalValue[1].trim()).to.equal(sum.toString())
             })
            })
        
        chkoutPage.getChkOutButton().click()
        chkoutPage.getCountry().type('India')
        chkoutPage.getSuggestion().click()
        chkoutPage.getTermsAndConditions().click()
        chkoutPage.getPurchaseTab().click()
        chkoutPage.getSuccesMessage().then((data)=>{
            expect(data.text().includes('Success')).to.be.true
        })
    })
})