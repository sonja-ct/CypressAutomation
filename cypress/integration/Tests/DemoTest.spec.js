/// <reference types="cypress"/>

describe('My first test',() => {
    it('Visits the Kitchen Sink', ()=> {
        cy.visit("http://localhost:8080/")
        cy.get("#x-auto-16-input").clear().type('kapua-sys')
        cy.get("#x-auto-17-input").clear().type('kapua-password')
        cy.get('button').contains('Login').click()  
        cy.contains('Access Groups').click()
        cy.contains('Add').click()

       cy.get('form').within(($form) => {
      //  cy.get('[method=get]').children().first().children().get('.x-form-field-wrap').first().get('input').first().clear().type('name')
      cy.get('[method=get]').get('input').first().clear().type('name2')
      cy.get('[method=get]').get('input').last().clear().type('description')
        })
    cy.contains('Submit').click()
         //   cy.get('[method=get]').children().children().children().first().get('input[type=text]').type('name')
          //  cy.get('[method=get]').children().children().children().last().type('description')
         //   cy.contains('Submit').click()
        })
        


})