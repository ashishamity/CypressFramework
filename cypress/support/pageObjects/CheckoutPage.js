export const chkoutPage = {

getChkOutButton(){
    return cy.get(':nth-child(4) > :nth-child(5) > .btn');
},
getCountry(){
    return cy.get('#country')
},

getSuggestion(){
    return cy.get('div.suggestions >ul >li > a')
},
getTermsAndConditions(){
   return cy.get('.checkbox > label')
},
getPurchaseTab(){
    return cy.get('form.ng-untouched > .btn')
},
getSuccesMessage(){
  return cy.get('.alert')
},
getPriceofItem(){
  return cy.get('tbody>tr>td:nth-child(4)>strong')
},
getTotalPriceOfItem(){
  return cy.get('h3 > strong')
}

}